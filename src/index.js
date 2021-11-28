import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';


let rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} 
            addPost={store.addPost.bind(store)} 
            addNews={store.addNews.bind(store)} 
            updateNewPostText={store.updateNewPostText.bind(store)}
            updateNewsText={store.updateNewsText.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState);

reportWebVitals();

store.subscribe(rerenderEntireTree);
