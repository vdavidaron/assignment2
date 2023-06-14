const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.json({ msg: 'Hello world' });
});

app.get('/echo/:id', (req, res) => {
  res.json({ id: req.params.id });
});

app.post('/sum', (req, res) => {
  const numbers = req.body.numbers;
  const sum = numbers.reduce((a, b) => a + b, 0);
  res.json({ sum });
});

let wordList = [];

app.post('/list', (req, res) => {
  const text = req.body.text;
  wordList.push(text);
  res.json({ list: wordList });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});