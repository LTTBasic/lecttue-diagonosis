// node ./server/server.js
// http://localhost:5000/api 접속 ㄱㄱ

const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send({test: "hi"});
});

module.exports = router;