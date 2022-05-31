const express = require('express');
const multer = require('multer');
const cors = require('cors');
var request = require('request');



const app = express();

app.use(cors());
app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({storage}).array('file');

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json(err)
        }

        return res.status(200).send(req.files)
    })
});

// axios.get('/test');

// axios.post('/users', {
//     username: 'blabla',
//     name: 'blabla'
//   });





app.listen(8080, () => {
    console.log('App is running on port 8080')
});

// import requests

// resp = requests.post("http://localhost:5000/predict",
//                      files={"file": open('<PATH/TO/.jpg/FILE>/cat.jpg','rb')})