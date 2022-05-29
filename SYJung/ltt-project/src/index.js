import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/js/all.js';
// import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// yarn add @fortawesome/fontawesome-free
// npm install react-router-dom
// yarn add styled-components
// yarn add react-icons

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>);

reportWebVitals();