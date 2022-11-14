const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
  res.json({ msg : "Hello world" });
})

app.get('/echo/:id', (req, res) => {
  res.json({ id : req.params.id});
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})