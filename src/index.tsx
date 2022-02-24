import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postsData: Array<{ id: number; message: string; likesCount:number }> = [
    {id: 1, message: "hello", likesCount:12},
    {id: 1, message: "hello", likesCount:12},
    {id: 1, message: "hello", likesCount:12},
    {id: 1, message: "hello", likesCount:12},
    {id: 2, message: "How are you?", likesCount:33},
    {id: 2, message: "How are you?", likesCount:33},
    {id: 2, message: "How are you?", likesCount:33},
    {id: 2, message: "How are you?", likesCount:33},
    {id: 2, message: "How are you?", likesCount:33},
]


ReactDOM.render(
  <React.StrictMode>
    <App obj={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
