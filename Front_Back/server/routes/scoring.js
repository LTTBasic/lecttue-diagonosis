const express = require('express');
var request = require('request');
const router = express.Router();
// 프론트로부터 post 요청이 들어오면 플라스크 서버의 api를 호출하여 그 결과를 받아 다시 프론트에 넘겨주는 코드이다.
router.post('/', function (req, res, next) {
    let body = req.body;
    const file_name = body.file_name

    const YoloResult = (callback)=>{ // options에 요청의 종류(method)와 호출할 api의 url(uri), 그리고 넘겨줄 인자(qs)를 명시
        const options = {
            method: 'POST',
            uri: "http://127.0.0.1:8000",
            qs: {
                file_name: file_name
            }
        }

        request(options, function (err, res, body) {
            callback(undefined, {
                result:body
            });
        });
    }

    YoloResult((err, {result}={})=>{
        if(err){
            console.log("error!!!!");
            res.send({
                message: "fail",
                status: "fail"
            });
        }
        let json = JSON.parse(result);
        res.send({
            message: "from flask",
            status: "success",
            data:{
                json
            }
        });
    })

});

module.exports = router;