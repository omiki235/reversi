import express from 'express';

const PORT = 8000;

const app = express();

app.get('/api/hello', async (req, res) => {
  res.json({
    message: 'Hello Express',
  });
});

app.listen(PORT, () => {
  console.log(`Webサーバー: http://localhost:${8000}`);
});
