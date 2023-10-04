import express from 'express';
import morgan from 'morgan';
import 'express-async-errors';
import mysql from 'mysql2/promise';

const PORT = 8000;

const app = express();

app.use(morgan('dev'));
app.use(express.static('static', { extensions: ['html'] }));

app.get('/api/error', async (req, res) => {
  throw new Error('Error Endpoint');
});

app.post('/api/games', async (req, res) => {
  const statedAt = new Date();

  const conn = await mysql.createConnection({
    host: 'localhost',
    database: 'reversi',
    user: 'reversi',
    password: 'password',
  });
  try {
    await conn.beginTransaction();

    await conn.execute('insert into games (started_at) values (?)', [statedAt]);

    await conn.commit();
  } finally {
    await conn.end();
  }

  res.status(201).end();
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`サーバー起動: http://localhost:${PORT}`);
});

function errorHandler(
  err: any,
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) {
  console.error('予期しないエラーが発生しました', err);
  res.status(500).send({
    message: '予期しないエラーが発生しました',
  });
}
