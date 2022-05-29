const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.Port || 5000;
const test = require('.//Router/test');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api' (req,res) => {
  res
})
// app.get('/api/yolov5' (req,res) => {
//   res.send([
    
//   ]);
// });