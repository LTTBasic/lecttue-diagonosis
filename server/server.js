const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.Port || 8080;
const test = require('.//Router/test');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/hello', (req,res) => {
  res.send({message: "HELLO WORLD!"})
});

app.listen(port, () => console.log('Listening on port ${port}'));