import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
