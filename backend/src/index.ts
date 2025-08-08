import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Backend!' });
});

app.listen(port, () => {
  console.log(`Backend server listening on http://localhost:${port}`);
});
