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

const dialogs: Array<{ id: number; name: string }> = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
]

const messages: Array<{ id: number; message: string }> = [
    {id: 1, message: "hi"},
    {id: 2, message: "How is your IT CAMASUTRA"},
]


ReactDOM.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
