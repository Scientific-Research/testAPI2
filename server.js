import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
cors();

const api = express();
const PORT = process.env.PORT;
api.use(cors());

const scores = [
  {
    user: 'EJT',
    score: '01842',
  },
  {
    user: 'PPB',
    score: '01812',
  },
  {
    user: 'EJT',
    score: '01442',
  },
];

api.get('/', function (req, res) {
  res.send('Test API works!');
});

api.get('/scores', function (req, res) {
  res.send(scores);
});

api.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
