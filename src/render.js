import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addNews, addPost, updateNewPostText, updateNewsText } from './redux/state';

export let rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} 
            addPost={addPost} 
            addNews={addNews} 
            updateNewPostText={updateNewPostText}
            updateNewsText={updateNewsText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

