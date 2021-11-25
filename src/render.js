import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addNews, addPost } from './redux/state';

export let rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addNews={addNews}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
