import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/js/all.js';
// import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// yarn add @fortawesome/fontawesome-free
// yarn add react-router-dom
// yarn add styled-components
// yarn add react-icons

// yarn add express (프로젝트 폴더 위치에서 명령어 실행)
/* 
>> Express는 node.js의 핵심 모듈인 http와 connect컴포넌트를 기반으로 하는 웹 프레임워크로,
개발을 빠르고 손쉽게 할 수 있도록 도와주는 역할을 함. 이는 미들웨어 구조 때문에 가능함

>> 미들웨어함수는 미들웨어란 클라이언트에게 요청이 오고, 그 요청을 보내기 위해 응답하려는 
중간(미들)에 목적에 맞게 처리를 하는, 거쳐가는 함수들을 뜻함
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>);

reportWebVitals();