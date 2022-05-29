// yarn add nodemon --dev (dev를 붙이면 local에서만 사용하겠다는 의미)
// yarn add concurrently 
// nodemon: node 명령어는 파일을 변경할 때마다 이전 명령어를 종료하고 다시 실행해야하는 불편함이 있는데 nodemon을 이용하면 바로바로 업데이트 가능
// concurrently: react 서버와 node 서버를 동시에 실행시키기 위한 모듈

// react와 node 서버 간에 데이터를 주고 받기 위해서는 프록시 모듈이 필요
// yarn add http-proxy-middleware 프록시 설치 (client)

// yarn add axios (client)

const express = require('express');
const app = express();
const test = require('./Router/test');

app.use('/api', test);

const port=5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, ()=>{console.log(`Listening on port ${port}`)});