import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import gif from './loadingGif/blobLoader.gif';

const root = ReactDOM.createRoot(document.getElementById('root'));
// var thing = <img src={gif} className="gif"></img>

// window.onload = (event) => {
//     console.log("page is fully loaded");
//     thing = <App />;
//  };

root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
