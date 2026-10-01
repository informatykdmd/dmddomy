const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const util = require('util');

const fs = require('fs');
const path = require('path');

const app = express();

app.set('trust proxy', ['127.0.0.1', '::1']);

const port = 5100;

const LOG_PATH = process.env.SERVER_LOG_PATH || path.join(__dirname, 'logs', 'server.log');
fs.mkdirSync(path.dirname(LOG_PATH), { recursive: true });

if (!process.env.DB_PASSWORD) {
  throw new Error('DB_PASSWORD must be set in the backend environment.');
}

function errorForLog(error) {
  const code = error?.code;
  const errno = error?.errno;
  const sqlState = error?.sqlState;

  return {
    code:
      typeof code === 'string' && /^[A-Z0-9_]{1,80}$/.test(code)
        ? code
        : 'UNKNOWN',
    errno: Number.isSafeInteger(errno) ? errno : null,
    sqlState:
      typeof sqlState === 'string' && /^[A-Z0-9]{5}$/.test(sqlState)
        ? sqlState
        : null
  };
}

function logEvent(message) {
  const timestamp = new Date().toISOString();
  const fullMessage = `[${timestamp}] ${message}\n`;

  try {
    fs.appendFileSync(LOG_PATH, fullMessage);
  } catch (err) {
    console.error('❌ Błąd zapisu do loga:', err);
  }
}

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const logLine = `IP: ${req.ip}, Time: ${timestamp}, Endpoint: ${req.originalUrl}, Method: ${req.method}\n`;
  //const logLine = `IP: ${req.ip}, Time: ${timestamp}, Endpoint: ${req.path}, Method: ${req.method}\n`;
  fs.appendFile(LOG_PATH, logLine, (err) => {
    if (err) {
      console.error('❌ Błąd zapisu do loga:', err);
    }
  });

  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// [WSTAW PONIŻEJ] — wyciąganie meta z nagłówków
const metaCapture = (req, res, next) => {
  const hdr = req.headers || {};



  req.meta = {
    ip: req.ip || req.socket?.remoteAddress || null,
    referer: hdr['referer'] || hdr['referrer'] || null,
    userAgent: hdr['user-agent'] || null,
    host: hdr['host'] || req.hostname || null,
  };
  next();
};
app.use(metaCapture);

// [WSTAW] — prosty anty-bot (dostosuj listę domen)
const allowedHosts = [
  'dmdbudownictwo.pl',
  'dmdelitehome.pl',
  'dmdinwestycje.pl',
  'wisniowahouse.pl',
  'dmd-instalacje.pl',
  'dmddomy.pl'
];

const antiBot = (req, res, next) => {
  const { userAgent, host } = req.meta;
  const okUA = !!(userAgent && userAgent.trim());
  const okHost = host ? allowedHosts.some(h => host.includes(h)) : true;
  if (!okUA || !okHost) {
    // log dla diagnostyki
    logEvent(`BLOCK 403 antiBot ip=${req.meta.ip} host=${host} ua="${userAgent}" ref="${req.meta.referer}" url=${req.originalUrl}`);
    //logEvent(`BLOCK 403 antiBot method=${req.method} path=${req.path}`);
    return res.status(403).end();
  }
  next();
};

const dbConnection = mysql.createConnection({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'informatyk',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'dmd',
  port: Number(process.env.DB_PORT || 3306),
  waitForConnections: true,   // Czekaj na dostępne połączenie
  connectionLimit: 10,        // Maksymalnie 10 jednoczesnych połączeń
  queueLimit: 0,              // Brak limitu kolejek
});

dbConnection.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', errorForLog(err));
  } else {
    console.log('Połączenie z bazą danych zostało ustanowione');
  }
});

// Dodaję funkcję do obsługi błędów i ponownego nawiązania połączenia
function handleDatabaseError(error) {
  console.error('Błąd bazy danych:', errorForLog(error));
  if (error.code === 'PROTOCOL_CONNECTION_LOST') {
    // Reconnect to the database
    dbConnection.connect((connectError) => {
      if (connectError) {
        console.error('Błąd ponownego nawiązania połączenia z bazą danych:', connectError);
      } else {
        console.log('Ponowne połączenie z bazą danych zostało ustanowione');
      }
    });
  }
}

// Endpoint do pobierania zadeklarowanej ilości rekordów danych z blog_posts
app.get('/api/getLatestPosts', async (req, res) => {
  const { count } = req.query;

  let sqlQuery = 'SELECT * FROM blog_posts ORDER BY ID DESC';
  let values = [];

  if (count && !isNaN(parseInt(count))) {
    sqlQuery += ' LIMIT ?';
    values = [parseInt(count)];
  }

  console.log(`Otrzymano żądanie GET na /api/getLatestPosts, ilość postów: ${count || 'Wszystkie'}`);

  try {
    const results = await dbConnection.promise().query(sqlQuery, values);

    // Przetwarzaj wyniki, pobieraj dodatkowe dane z tabeli contents i authors
    const latestPostsWithDetails = await Promise.all(results[0].map(async (post) => ({
      ...post,
      contentDetails: await getContentDetails(post.CONTENT_ID),
      authorDetails: await getAuthorDetails(post.AUTHOR_ID),
    })));

    res.status(200).json(latestPostsWithDetails);
  } catch (error) {
    handleDatabaseError(error);
    console.error('Błąd podczas pobierania najnowszych postów:', errorForLog(error));
    res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
  }
});

// Endpoint do pobierania zadeklarowanej ilości rekordów danych z workers_team
app.get('/api/getWorkers', async (req, res) => {
  const { count } = req.query;

  let sqlQuery = "SELECT * FROM workers_team WHERE STATUS = 1 AND EMPLOYEE_DEPARTMENT = 'dmd domy' ORDER BY ID ASC";
  let values = [];

  if (count && !isNaN(parseInt(count))) {
    sqlQuery += ' LIMIT ?';
    values = [parseInt(count)];
  }

  console.log(`Otrzymano żądanie GET na /api/getWorkers, ilość pracowników: ${count || 'Wszyscy'}`);

  try {
    const results = await dbConnection.promise().query(sqlQuery, values);

    const latestWorkers = await Promise.all(results[0].map(async (workers) => ({
      ...workers,
    })));

    res.status(200).json(latestWorkers);
  } catch (error) {
    handleDatabaseError(error);
    console.error('Błąd podczas pobierania pracowników:', errorForLog(error));
    res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
  }
});

// Endpoint do dynamicznego ładowania kolejnych postów
app.get('/api/loadMorePosts', async (req, res) => {
  const { offset = 0, limit = 10 } = req.query; // Domyślne wartości offset i limit

  const sqlQuery = `SELECT * FROM blog_posts ORDER BY id DESC LIMIT ? OFFSET ?`;
  const values = [parseInt(limit), parseInt(offset)];

  try {
    const [results] = await dbConnection.promise().query(sqlQuery, values);

    // Przetwarzaj wyniki, pobieraj dodatkowe dane z tabeli contents i authors
    const postsWithDetails = await Promise.all(results.map(async (post) => ({
      ...post,
      contentDetails: await getContentDetails(post.CONTENT_ID),
      authorDetails: await getAuthorDetails(post.AUTHOR_ID),
    })));

    res.status(200).json(postsWithDetails);
  } catch (error) {
    handleDatabaseError(error);
    res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
  }
});


// Endpoint do pobierania wszystkich danych z blog_posts
app.get('/api/getAllBlogPosts', async (req, res) => {
  const sqlQuery = 'SELECT * FROM blog_posts';

  try {
    const results = await new Promise((resolve, reject) => {
      dbConnection.query(sqlQuery, (error, results, fields) => {
        if (error) {
          console.error('Błąd zapytania do bazy danych:', error);
          reject(error);
        } else {
          // console.log('Pobrano dane z blog_posts:', results);
          resolve(results);
          // console.log('Metadane pól:', fields);
        }
      });
    });

    // Przetwarzaj wyniki, pobieraj dodatkowe dane z tabeli contents i authors
    const postsWithDetails = await Promise.all(results.map(async (post) => ({
      ...post,
      contentDetails: await getContentDetails(post.CONTENT_ID),
      authorDetails: await getAuthorDetails(post.AUTHOR_ID),
    })));

    const sortedPostsWithDetails = postsWithDetails.slice().sort((a, b) => b.ID - a.ID);

    const totalPosts = postsWithDetails.length;
    // console.log('totalPosts', totalPosts);
    res.status(200).json([sortedPostsWithDetails, totalPosts]);
  } catch (error) {
    handleDatabaseError(error);
    res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
  }
});

// Endpoint do pobierania danych z blog_posts z paginacją
app.get('/api/getBlogPosts', async (req, res) => {

  const { page = 1, pageSize = 6 } = req.query;
  const offset = (page - 1) * pageSize;

  // const sqlQuery = `SELECT * FROM blog_posts LIMIT ? OFFSET ?`;
  const sqlQuery = `SELECT * FROM blog_posts ORDER BY ID DESC LIMIT ? OFFSET ?`;

  const values = [pageSize, offset];

  console.log(`Otrzymano żądanie GET na /api/getBlogPosts, strona: ${page}`);

  try {
    const results = await dbConnection.promise().query(sqlQuery, values);
    // console.log('results: ', results)
    // Przetwarzaj wyniki, pobieraj dodatkowe dane z tabeli contents i authors
    const postsWithDetails = await Promise.all(results[0].map(async (post) => ({
      ...post,
      contentDetails: await getContentDetails(post.CONTENT_ID),
      authorDetails: await getAuthorDetails(post.AUTHOR_ID),
    })));
    const totalPosts = await dbConnection.promise().query('SELECT COUNT(*) as count FROM blog_posts');
    const totalPages = Math.ceil(totalPosts[0][0].count / pageSize);

    const sortedPostsWithDetails = postsWithDetails.slice().sort((a, b) => b.ID - a.ID);

    // console.log('totalPages: ', totalPages)

    res.status(200).json([sortedPostsWithDetails, totalPages]);
  } catch (error) {
    handleDatabaseError(error);
    res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
  }
});


// Funkcja pomocnicza do pobierania danych z tabeli contents
async function getContentDetails(contentId) {
  const sqlQuery = 'SELECT * FROM contents WHERE ID = ?';
  const values = [contentId];

  // console.log('Otrzymano zapytanie getContentDetails:', values);

  try {
    const [contentDetails] = await dbConnection.promise().query(sqlQuery, values);

    // console.log('Pobrano dane z contents:', contentDetails);

    return contentDetails[0];
  } catch (error) {
    handleDatabaseError(error);
    console.error('Błąd podczas pobierania danych z contents:', errorForLog(error));
    return null;
  }
}

// Funkcja pomocnicza do pobierania danych z tabeli authors
async function getAuthorDetails(authorId) {
  const sqlQuery = 'SELECT * FROM authors WHERE ID = ?';
  const values = [authorId];

  // console.log('Otrzymano zapytanie getAuthorDetails:', values);

  try {
    const [authorDetails] = await dbConnection.promise().query(sqlQuery, values);

    // console.log('Pobrano dane z authors:', authorDetails);

    return authorDetails[0];
  } catch (error) {
    handleDatabaseError(error);
    console.error('Błąd podczas pobierania danych z authors:', errorForLog(error));
    return null;
  }
}


// Funkcja pomocnicza do pobierania danych z tabeli comments
async function getCommentsDetails(commentsId) {
  const sqlQuery = 'SELECT * FROM comments WHERE BLOG_POST_ID = ?';
  const values = [commentsId];

  // console.log('Otrzymano zapytanie getAuthorDetails:', values);

  try {
    const [commentDetails] = await dbConnection.promise().query(sqlQuery, values);

    // console.log('Pobrano dane z authors:', commentDetails);

    return commentDetails;
  } catch (error) {
    handleDatabaseError(error);
    console.error('Błąd podczas pobierania danych z authors:', errorForLog(error));
    return null;
  }
}

// Funkcja pomocnicza do pobierania danych z tabeli newsletter
async function getUserDetails(userId) {
  const sqlQuery = 'SELECT CLIENT_NAME, AVATAR_USER FROM newsletter WHERE ID = ?';
//  const sqlQuery = 'SELECT * FROM newsletter WHERE ID = ?';
  const values = [userId];

  // console.log('Otrzymano zapytanie getUserDetails:', values);

  try {
    const [userDetails] = await dbConnection.promise().query(sqlQuery, values);

    // console.log('Pobrano dane z authors:', userDetails);

    return userDetails[0];
  } catch (error) {
    handleDatabaseError(error);
    console.error('Błąd podczas pobierania danych z authors:', errorForLog(error));
    return null;
  }
}

// funkcja generowania user_hash
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

// Endpoint do pobierania danych o pojedynczym poście
app.get('/api/getPost/:postId', async (req, res) => {
  const postId = req.params.postId;

  const sqlQuery = 'SELECT * FROM blog_posts WHERE ID = ?';

  // console.log(`Otrzymano żądanie GET na /api/getPost/${postId}`);

  try {
    const [post] = await dbConnection.promise().query(sqlQuery, [postId]);

    // Pobieraj dodatkowe dane z tabeli contents i authors
    const postWithDetails = {
      ...post[0],
      contentDetails: await getContentDetails(post[0].CONTENT_ID),
      authorDetails: await getAuthorDetails(post[0].AUTHOR_ID),
      commentsDetails: await getCommentsDetails(postId),

    };
    // Pobieranie informacji o autorach komentarzy
    if (postWithDetails.commentsDetails) {
      for (const comment of postWithDetails.commentsDetails) {
        comment.userDetails = await getUserDetails(comment.AUTHOR_OF_COMMENT_ID);
      }
    }


    res.status(200).json(postWithDetails);
  } catch (error) {
    handleDatabaseError(error);
    console.error('Błąd podczas pobierania danych z pojedynczego posta:', errorForLog(error));
    res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
  }
});

// Endpoint do dodawania subskrypcji do bazy danych
app.post('/api/addSubscriber', antiBot, (req, res) => {
  const { name, email } = req.body;
  const { ip, referer, userAgent, host } = req.meta;

  // console.log('POST /api/addSubscriber', { ip, referer, ua: userAgent, host, body: req.body });
  console.log('POST /api/addSubscriber');
  if (!email) return res.status(400).json({ error: 'Brak adresu email.' });

  // Sprawdzenie, czy email już istnieje w bazie
  const checkEmailQuery = 'SELECT 1 FROM newsletter WHERE CLIENT_EMAIL = ? LIMIT 1';
  dbConnection.query(checkEmailQuery, [email], (checkError, checkResults) => {
    if (checkError) {
      handleDatabaseError(checkError);
      console.error('Błąd podczas sprawdzania emaila w bazie danych:', checkError);
      return res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
    }

    if (checkResults.length > 0) {
      console.log('Podany email już istnieje w bazie danych.');
      return res.status(400).json({ error: 'Podany email już jest zarejestrowany.' });
    }

    // Jeśli email nie istnieje, dodaj do bazy (ACTIVE=0 — double opt-in)
    const randomString = generateRandomString(20);
    const sqlQuery = `
      INSERT INTO newsletter
        (CLIENT_NAME, CLIENT_EMAIL, ACTIVE, USER_HASH, remote_ip, referer, user_agent, source_host)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [name || null, email, 0, randomString, ip, referer, userAgent, host];

    dbConnection.query(sqlQuery, values, (error, results) => {
      if (error) {
        // jeśli masz UNIQUE(CLIENT_EMAIL), ER_DUP_ENTRY traktuj łagodnie
        if (error.code === 'ER_DUP_ENTRY') {
          return res.status(200).json({ success: 'Adres już istnieje.' });
        }
        handleDatabaseError(error);
        console.error('Błąd zapytania do bazy danych:', errorForLog(error));
        return res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
      }
      console.log('Subskrypcja została dodana do bazy danych:', results?.insertId);
      res.status(201).json({ success: 'Subskrypcja została dodana do bazy danych.' });
    });
  });
});

// Endpoint do dodawania avatara subskrybenta
app.post('/api/addSubscriberAvatar', (req, res) => {
  const { userHash, userAvatar } = req.body;

  console.log('Otrzymano żądanie POST na /api/addSubscriberAvatar');
  // console.log('Dane z żądania:', req.body);

  // Sprawdzenie, czy UserHash już istnieje w bazie
  const checkUserHashQuery = 'SELECT * FROM newsletter WHERE USER_HASH = ?';
  const checkUserHashValues = [userHash];

  dbConnection.query(checkUserHashQuery, checkUserHashValues, (checkError, checkResults, checkFields) => {
    if (checkError) {
      handleDatabaseError(checkError);
      console.error('Błąd podczas sprawdzania UserHasha w bazie danych:', errorForLog(checkError));
      return res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
    }

    if (checkResults.length === 0) {
      // UserHash nie istnieje, zwróć odpowiedni komunikat
      console.log('Podany UserHash nie istnieje w bazie danych.');
      return res.status(400).json({ error: 'Podany UserHash nie jest zarejestrowany.' });
    }
  // Jeśli UserHash istnieje, dodaj avatar
  const sqlQuery = 'UPDATE newsletter SET AVATAR_USER = ? WHERE USER_HASH = ?';
  const values = [userAvatar, userHash];

  dbConnection.query(sqlQuery, values, (error, results, fields) => {
    if (error) {
      handleDatabaseError(error);
      console.error('Błąd zapytania do bazy danych:', error);
      res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
    } else {
      console.log('Avatar został dodany do bazy danych:', results);
      res.status(201).json({ success: 'Avatar został dodany do bazy danych' });
    }
    });
  });
});

// Endpoint do usuwania subskrybenta z bazy
app.post('/api/removeSubscriber', (req, res) => {
  const { userHash } = req.body;
  // console.log(userHash);
  console.log('Otrzymano żądanie POST na /api/removeSubscriber');
  // console.log('Dane z żądania:', req.body);

  // Sprawdzenie, czy istnieje subskrybent o podanym user_hash
  const checkUserHashQuery = 'SELECT * FROM newsletter WHERE USER_HASH = ?';
  const checkUserHashValues = [userHash];

  dbConnection.query(checkUserHashQuery, checkUserHashValues, (checkError, checkResults, checkFields) => {
    if (checkError) {
      handleDatabaseError(checkError);
      console.error('Błąd podczas sprawdzania user_hash w bazie danych:', errorForLog(checkError));
      return res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
    }

    if (checkResults.length === 0) {
      // Subskrybent o podanym user_hash nie istnieje, zwróć odpowiedni komunikat
      console.log('Nie znaleziono subskrybenta o podanym user_hash w bazie danych.');
      return res.status(404).json({ error: 'Nie znaleziono subskrybenta o podanym user_hash.' });
    }

    // Jeśli subskrybent o podanym user_hash istnieje, usuń go z bazy
    const deleteUserQuery = "UPDATE newsletter SET ACTIVE = 404, CLIENT_EMAIL = 'john@doe.removed.user', USER_HASH = 'REMOVED404'  WHERE USER_HASH = ?;";
    dbConnection.query(deleteUserQuery, checkUserHashValues, (deleteError, deleteResults, deleteFields) => {
      if (deleteError) {
        handleDatabaseError(deleteError);
        console.error('Błąd zapytania do bazy danych podczas usuwania subskrybenta:', deleteError);
        return res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
      }

      console.log('Subskrybent został usunięty z bazy danych:', deleteResults);
      res.status(200).json({ success: 'Subskrybent został usunięty z bazy danych.' });
    });
  });
});

// Endpoint do aktywacji subskrybenta w bazy
app.post('/api/activesSubscriber', (req, res) => {
  const { userHash } = req.body;
  // console.log(userHash);
  console.log('Otrzymano żądanie POST na /api/activesSubscriber');
  // console.log('Dane z żądania:', req.body);

  // Sprawdzenie, czy istnieje subskrybent o podanym user_hash
  const checkUserHashQuery = 'SELECT * FROM newsletter WHERE USER_HASH = ?';
  const checkUserHashValues = [userHash];

  dbConnection.query(checkUserHashQuery, checkUserHashValues, (checkError, checkResults, checkFields) => {
    if (checkError) {
      handleDatabaseError(checkError);
      console.error('Błąd podczas sprawdzania user_hash w bazie danych:', checkError);
      return res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
    }

    if (checkResults.length === 0) {
      // Subskrybent o podanym user_hash nie istnieje, zwróć odpowiedni komunikat
      console.log('Nie znaleziono subskrybenta o podanym user_hash w bazie danych.');
      return res.status(404).json({ error: 'Nie znaleziono subskrybenta o podanym user_hash.' });
    }

    // Jeśli subskrybent o podanym user_hash istnieje, usuń go z bazy
    const activeUserQuery = 'UPDATE newsletter SET ACTIVE = 1 WHERE USER_HASH = ?;';
    dbConnection.query(activeUserQuery, checkUserHashValues, (activeError, activeResults, activeFields) => {
      if (activeError) {
        handleDatabaseError(activeError);
        console.error('Błąd zapytania do bazy danych podczas usuwania subskrybenta:', errorForLog(activeError));
        return res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
      }

      console.log('Subskrybent został usunięty z bazy danych:', activeResults);
      res.status(200).json({ success: 'Subskrybent został usunięty z bazy danych.' });
    });
  });
});

// Endpoint do dodawania komentarzy posta
app.post('/api/addComment', (req, res) => {
  const { name, email, post_id, comment_content } = req.body;
  // console.log('req.body', req.body)

  // Sprawdzenie, czy email i imię użytkownika istnieje w bazie
  const checkEmailQuery = 'SELECT * FROM newsletter WHERE CLIENT_EMAIL = ? AND CLIENT_NAME = ?';
  dbConnection.query(checkEmailQuery, [email, name], (checkError, checkResults, checkFields) => {
    if (checkError) {
      handleDatabaseError(checkError);
      console.error('Błąd podczas sprawdzania emaila w bazie danych:', errorForLog(checkError));
      return res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
    }
    // console.log('checkResults', checkResults)
    if (checkResults.length === 0) {
      return res.status(400).json({ error: 'Aby komentować, należy nas subskrybować.' });
    } else {
      const userId = checkResults[0].ID;

      if (!userId) {
        return res.status(500).json({ error: 'Nie udało się uzyskać identyfikatora użytkownika.' });
      }

      // Jeśli email i imię istnieją w bazie, dodajemy komentarz
      const sqlQuery = 'INSERT INTO comments (BLOG_POST_ID, COMMENT_CONNTENT, AUTHOR_OF_COMMENT_ID, DATE_TIME) VALUES (?, ?, ?, NOW())';
      const values = [post_id, comment_content, userId];

      dbConnection.query(sqlQuery, values, (error, results, fields) => {
        if (error) {
          handleDatabaseError(error);
          console.error('Błąd zapytania do bazy danych:', errorForLog(error));
          res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
        } else {
          console.log('Komentarz został dodany do posta:', results);
          res.status(201).json({ success: 'Komentarz został dodany do bazy danych.' });
        }
      });
    }
  });
});

// Endpoint do wyszukiwania postów
app.get('/api/searchPosts', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Brak frazy wyszukiwania.' });
  }

  const searchQuery = '%' + query + '%'; // Umożliwia wyszukiwanie frazy w dowolnym miejscu ciągu znaków

  const sqlQuery = `SELECT * FROM contents WHERE TITLE LIKE ? OR CONTENT_MAIN LIKE ? OR HIGHLIGHTS LIKE ? OR BULLETS LIKE ? ORDER BY ID DESC`;

  const values = [searchQuery, searchQuery, searchQuery, searchQuery];

  try {
    const results = await dbConnection.promise().query(sqlQuery, values);

    // Przetwarzaj wyniki, pobieraj dodatkowe dane z tabeli contents i authors
    const postsWithDetails = await Promise.all(results[0].map(async (post) => ({
      ...post,

    })));

    res.status(200).json(postsWithDetails);
  } catch (error) {
    handleDatabaseError(error);
    console.error('Błąd podczas wyszukiwania postów:', errorForLog(error));
    res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania wyszukiwania.' });
  }
});

// Endpoint do pobierania nazwy użytkownika newslettera
app.get('/api/getUserName', async (req, res) => {
  const { userHash } = req.query;

  if (!userHash) {
    return res.status(400).json({ error: 'Brak hasha usera.' });
  }

  const sqlQuery = `SELECT CLIENT_NAME FROM newsletter WHERE USER_HASH = ?`;
  const values = [userHash];

  try {
    const results = await dbConnection.promise().query(sqlQuery, values);
    res.status(200).json(results[0]);
  } catch (error) {
    handleDatabaseError(error);
    console.error('Błąd podczas pobierania nazwy usera:', errorForLog(error));
    res.status(500).json({ error: 'Wystąpił podczas pobierania nazwy usera' });
  }
});


// Endpoint do wysyłania formularza kontaktowego do bazy danych
app.post('/api/sendContactAsks', antiBot, async (req, res) => {
  const { name, email, subject, message, done } = req.body;
  const { ip, referer, userAgent, host } = req.meta;

  // console.log('POST /api/sendContactAsks', { ip, referer, ua: userAgent, host, bodyKeys: Object.keys(req.body || {}) });
  console.log('POST /api/sendContactAsks');
  if (!email || !message) {
    return res.status(400).json({ error: 'Brak wymaganych pól (email, message).' });
  }

  const sqlQuery = `
    INSERT INTO contact
      (CLIENT_NAME, CLIENT_EMAIL, SUBJECT, MESSAGE, DONE, remote_ip, referer, user_agent, source_host)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    name || null,
    email,
    subject || null,
    message,
    Number(done ?? 1),
    ip, referer, userAgent, host
  ];

  try {
    const results = await util.promisify(dbConnection.query).bind(dbConnection)(sqlQuery, values);
    res.status(201).json({ success: 'Wiadomość została dodana do bazy danych.' });
  } catch (error) {
    handleDatabaseError(error);
    console.error('Błąd zapytania do bazy danych:', errorForLog(error));
    res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
  }
});


// === [KATEGORIE REALIZACJI DOMÓW] ===
app.get('/api/realizacje/kategorie', async (req, res) => {
  const { rodzaj } = req.query;

  let sql = `
    SELECT rodzaj, nazwa, opis, zdjecie, ep_url
    FROM realizacje_domy_kategorie
  `;
  const values = [];

  if (rodzaj) {
    sql += ` WHERE rodzaj = ?`;
    values.push(rodzaj);
  }

  sql += ` ORDER BY rodzaj ASC, nazwa ASC`;

  try {
    const [rows] = await dbConnection.promise().query(sql, values);
    res.status(200).json(rows);
  } catch (error) {
    handleDatabaseError(error);
    console.error('Błąd podczas pobierania kategorii realizacji:', errorForLog(error));
    res.status(500).json({ error: 'Wystąpił błąd podczas pobierania kategorii realizacji.' });
  }
});

// === [LISTA REALIZACJI DOMÓW] ===
app.get('/api/realizacje/domy', async (req, res) => {
  const {
    kategoria,
    rok_od,      // np. 2021
    rok_do,      // np. 2025
    limit = 12,
    offset = 0,
  } = req.query;

  const where = [];
  const values = [];

  if (kategoria) {
    where.push(`kategoria = ?`);
    values.push(kategoria);
  }
  if (rok_od && !isNaN(parseInt(rok_od))) {
    where.push(`(r_start IS NULL OR r_start >= ?)`);
    values.push(parseInt(rok_od));
  }
  if (rok_do && !isNaN(parseInt(rok_do))) {
    where.push(`(r_finish IS NULL OR r_finish <= ?)`);
    values.push(parseInt(rok_do));
  }

  let sql = `
    SELECT kategoria, zdjecie, tytul_ogloszenia, opis, r_start, r_finish
    FROM realizacje_domy
  `;

  if (where.length) {
    sql += ` WHERE ` + where.join(' AND ');
  }

  // NULL-e na końcu, potem malejąco r_finish, a na końcu r_start malejąco
  sql += `
    ORDER BY (r_finish IS NULL) ASC, r_finish DESC, r_start DESC
    LIMIT ? OFFSET ?
  `;
  values.push(parseInt(limit), parseInt(offset));

  try {
    const [rows] = await dbConnection.promise().query(sql, values);

    // policz łączną liczbę (do paginacji w FE)
    let countSql = `SELECT COUNT(*) AS cnt FROM realizacje_domy`;
    let countVals = [];
    if (where.length) {
      countSql += ` WHERE ` + where.join(' AND ');
      countVals = values.slice(0, values.length - 2); // bez limit/offset
    }
    const [countRes] = await dbConnection.promise().query(countSql, countVals);

    res.status(200).json({
      items: rows,
      total: countRes[0]?.cnt ?? 0,
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
  } catch (error) {
    handleDatabaseError(error);
    console.error('Błąd podczas pobierania realizacji domów:', errorForLog(error));
    res.status(500).json({ error: 'Wystąpił błąd podczas pobierania realizacji domów.' });
  }
});


// Lokalny HTTP. HTTPS bedzie obslugiwany przez Apache.
const startServer = async () => {
  // Sprawdz gotowosc bazy przed otwarciem portu.
  await dbConnection.promise().query('SELECT 1');

  const httpServer = app.listen(port, '127.0.0.1', () => {
    console.log(`Serwer Express nasluchuje na http://127.0.0.1:${port}`);
    if (typeof process.send === 'function') process.send('ready');
  });

  httpServer.once('error', (err) => {
    console.error('Blad uruchomienia lokalnego HTTP:', errorForLog(err));
    dbConnection.destroy();
    process.exit(1);
  });
};

startServer().catch((err) => {
  console.error('Blad startu backendu:', errorForLog(err));
  dbConnection.destroy();
  process.exit(1);
});
