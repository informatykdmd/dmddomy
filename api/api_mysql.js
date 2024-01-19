const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const util = require('util');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dmd',
  port: 3306,
});

dbConnection.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err);
  } else {
    console.log('Połączenie z bazą danych zostało ustanowione');
  }
});


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
    console.error('Błąd podczas pobierania najnowszych postów:', error);
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
    console.error('Błąd podczas pobierania pracowników:', error);
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
    console.error('Błąd podczas pobierania danych z contents:', error);
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
    console.error('Błąd podczas pobierania danych z authors:', error);
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
    console.error('Błąd podczas pobierania danych z authors:', error);
    return null;
  }
}

// Funkcja pomocnicza do pobierania danych z tabeli newsletter
async function getUserDetails(userId) {
  const sqlQuery = 'SELECT * FROM newsletter WHERE ID = ?';
  const values = [userId];

  // console.log('Otrzymano zapytanie getUserDetails:', values);

  try {
    const [userDetails] = await dbConnection.promise().query(sqlQuery, values);

    // console.log('Pobrano dane z authors:', userDetails);

    return userDetails[0];
  } catch (error) {
    console.error('Błąd podczas pobierania danych z authors:', error);
    return null;
  }
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
    console.error('Błąd podczas pobierania danych z pojedynczego posta:', error);
    res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
  }
});

// Endpoint do dodawania subskrypcji do bazy danych
app.post('/api/addSubscriber', (req, res) => {
  const { name, email } = req.body;

  console.log('Otrzymano żądanie POST na /api/addSubscriber');
  console.log('Dane z żądania:', req.body);

  // Sprawdzenie, czy email już istnieje w bazie
  const checkEmailQuery = 'SELECT * FROM newsletter WHERE CLIENT_EMAIL = ?';
  const checkEmailValues = [email];

  dbConnection.query(checkEmailQuery, checkEmailValues, (checkError, checkResults, checkFields) => {
    if (checkError) {
      console.error('Błąd podczas sprawdzania emaila w bazie danych:', checkError);
      return res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
    }

    if (checkResults.length > 0) {
      // Email już istnieje, zwróć odpowiedni komunikat
      console.log('Podany email już istnieje w bazie danych.');
      return res.status(400).json({ error: 'Podany email już jest zarejestrowany.' });
    }
  // Jeśli email nie istnieje, dodaj do bazy
  const sqlQuery = 'INSERT INTO newsletter (CLIENT_NAME , CLIENT_EMAIL ) VALUES (?, ?)';
  const values = [name, email];

  dbConnection.query(sqlQuery, values, (error, results, fields) => {
    if (error) {
      console.error('Błąd zapytania do bazy danych:', error);
      res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
    } else {
      console.log('Subskrybcja została dodana do bazy danych:', results);
      res.status(201).json({ success: 'Subskrybcja została dodana do bazy danych.' });
    }
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
      console.error('Błąd podczas sprawdzania emaila w bazie danych:', checkError);
      return res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
    }
    console.log('checkResults', checkResults)
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
          console.error('Błąd zapytania do bazy danych:', error);
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
    console.error('Błąd podczas wyszukiwania postów:', error);
    res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania wyszukiwania.' });
  }
});

// Endpoint do wysyłania formularza kontaktowego do bazy danych
app.post('/api/sendContactAsks', async (req, res) => {
  const { name, email, subject, message, done } = req.body;
  console.log('req.body', req.body)

  const sqlQuery = 'INSERT INTO contact (CLIENT_NAME, CLIENT_EMAIL, SUBJECT, MESSAGE, DONE) VALUES (?, ?, ?, ?, ?)';
  const values = [name, email, subject, message, done];

  try {
    const results = await util.promisify(dbConnection.query).bind(dbConnection)(sqlQuery, values);

    // console.log('Wiadomość została dodana do bazy danych:', results);
    res.status(201).json({ success: 'Wiadomość została dodana do bazy danych.' });
  } catch (error) {
    console.error('Błąd zapytania do bazy danych:', error);
    res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
  }
});

app.listen(port, () => {
  console.log(`Serwer Express nasłuchuje na porcie ${port}`);
});

