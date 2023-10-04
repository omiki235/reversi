import express from 'express';
import morgan from 'morgan';
import 'express-async-errors';

const PORT = 8000;

const app = express();

app.use(morgan('dev'));
app.use(express.static('static', { extensions: ['html'] }));

app.get('/api/hello', async (req, res) => {
  res.json({
    message: 'Hello Express',
  });
});

app.get('/api/error', async (req, res) => {
  throw new Error('Error Endpoint');
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