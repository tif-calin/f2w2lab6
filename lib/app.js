// import dependencies
import express from 'express';
import cors from 'cors';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());

// example route to see if app is alive!
app.get('/', (req, res) => {
  // send back a short response
  res.send('Hello World!');
});

// API routes for cats
app.get('/api/cats', (req, res) => {
  res.json([]);
});

export default app;