import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
        postData: [
            {id:1, text:'hello pidor'},
            {id:2, text:'dlkjf;aljdf;aldfjl;aj'},
            {id:3, text:'l;dfjla;dfja;lsdfj'}
          ],
        newPostText: ''
    },
    messagesPage: {
        dialogData: [
            {id:1, name:'max'},
            {id:2, name:'vlad'},
            {id:3, name:'diana'},
            {id:4, name:'ihor'}
          ],
          
        messageData: [
            {id:1, text:'klajlkadjsfl;aksfj'},
            {id:2, text:'fklgjsldkfgjlskd;fgj'}
          ],
          newMessageText:''
    },
    newsPage: {
        newsData: [
            {id:1, text:'hello pidor'},
            {id:2, text:'dlkjf;aljdf;aldfjl;aj'},
            {id:3, text:'l;dfjla;dfja;lsdfj'}
          ],
        newNewsText:' '
    }
  },
  _callSubscriber() {
    console.log('data changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.newsPage = newsReducer(this._state.newsPage, action);

    this._callSubscriber(this._state);
  }
}

export default store;