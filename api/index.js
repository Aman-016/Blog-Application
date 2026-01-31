import express from 'express';

const app = express();

app.listen(3000, () => {
  console.log('API server is running on 3000');
});

export default app;

