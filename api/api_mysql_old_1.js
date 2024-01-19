const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

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

// Endpoint do pobierania danych z blog_posts z paginacją
app.get('/api/getBlogPosts', async (req, res) => {
  const { page = 1, pageSize = 12 } = req.query;
  const offset = (page - 1) * pageSize;

  const sqlQuery = `SELECT * FROM blog_posts LIMIT ? OFFSET ?`;
  const values = [pageSize, offset];

  console.log(`Otrzymano żądanie GET na /api/getBlogPosts, strona: ${page}`);

  try {
    const results = await dbConnection.promise().query(sqlQuery, values);

    // Przetwarzaj wyniki, pobieraj dodatkowe dane z tabeli contents i authors
    const postsWithDetails = await Promise.all(results[0].map(async (post) => ({
      ...post,
      contentDetails: await getContentDetails(post.CONTENT_ID),
      authorDetails: await getAuthorDetails(post.AUTHOR_ID),
    })));

    res.status(200).json(postsWithDetails);
  } catch (error) {
    res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
  }
});


// Endpoint do pobierania danych z blog_posts
// app.get('/api/getBlogPosts', async (req, res) => {
//   const sqlQuery = 'SELECT * FROM blog_posts';

//   console.log('Otrzymano żądanie GET na /api/getBlogPosts');

//   try {
//     const results = await new Promise((resolve, reject) => {
//       dbConnection.query(sqlQuery, (error, results, fields) => {
//         if (error) {
//           console.error('Błąd zapytania do bazy danych:', error);
//           reject(error);
//         } else {
//           console.log('Pobrano dane z blog_posts:', results);
//           resolve(results);
//         }
//       });
//     });

//     // Przetwarzaj wyniki, pobieraj dodatkowe dane z tabeli contents i authors
//     const postsWithDetails = await Promise.all(results.map(async (post) => ({
//       ...post,
//       contentDetails: await getContentDetails(post.CONTENT_ID),
//       authorDetails: await getAuthorDetails(post.AUTHOR_ID),
//     })));

//     res.status(200).json(postsWithDetails);
//   } catch (error) {
//     res.status(500).json({ error: 'Wystąpił błąd podczas przetwarzania żądania.' });
//   }
// });

// Funkcja pomocnicza do pobierania danych z tabeli contents
async function getContentDetails(contentId) {
  const sqlQuery = 'SELECT * FROM contents WHERE ID = ?';
  const values = [contentId];

  console.log('Otrzymano zapytanie getContentDetails:', values);

  try {
    const [contentDetails] = await dbConnection.promise().query(sqlQuery, values);

    console.log('Pobrano dane z contents:', contentDetails);

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

  console.log('Otrzymano zapytanie getAuthorDetails:', values);

  try {
    const [authorDetails] = await dbConnection.promise().query(sqlQuery, values);

    console.log('Pobrano dane z authors:', authorDetails);

    return authorDetails[0];
  } catch (error) {
    console.error('Błąd podczas pobierania danych z authors:', error);
    return null;
  }
}

// Endpoint do pobierania danych o pojedynczym poście
app.get('/api/getPost/:postId', async (req, res) => {
  const postId = req.params.postId;

  const sqlQuery = 'SELECT * FROM blog_posts WHERE ID = ?';

  console.log(`Otrzymano żądanie GET na /api/getPost/${postId}`);

  try {
    const [post] = await dbConnection.promise().query(sqlQuery, [postId]);

    // Pobieraj dodatkowe dane z tabeli contents i authors
    const postWithDetails = {
      ...post[0],
      contentDetails: await getContentDetails(post[0].CONTENT_ID),
      authorDetails: await getAuthorDetails(post[0].AUTHOR_ID),
    };

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


app.listen(port, () => {
  console.log(`Serwer Express nasłuchuje na porcie ${port}`);
});

