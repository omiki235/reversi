import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import { gameRouter } from './presentation/game-router';
import { turnRouter } from './presentation/turn-router';

const PORT = 8000;

const app = express();

app.use(morgan('dev'));
app.use(express.static('static', { extensions: ['html'] }));
app.use(express.json());

app.use(gameRouter);
app.use(turnRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`リバーシアプリを起動しました！: http://localhost:${PORT}`);
});

function errorHandler(
  err: any,
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) {
  console.error('Unexpected error occurred', err);
  res.status(500).send({
    message: 'Unexpected error occurred',
  });
}
