const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT= 'UPDATE-NEW-POST-TEXT';

const ADD_NEWS = 'ADD-NEWS';
const UPDATE_NEW_NEWS_TEXT = 'UPDATE-NEW-NEWS-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        text: this._state.profilePage.newPostText
      }
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = ' ';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === 'ADD-NEWS') {
      let newNews = {
        id: 4,
        text: this._state.newsPage.newNewsText
      }
      this._state.newsPage.newsData.push(newNews);
      this._state.newsPage.newNewsText = ' ';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-NEWS-TEXT') {
      this._state.newsPage.newNewsText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      this._state.messagesPage.messageData.push(
        {id:2, text: this._state.messagesPage.newMessageText});
      this._state.messagesPage.newMessageText = ' ';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export let addPostActionCreator = () => {
  return {type: ADD_POST}
}
 export let updateNewPostTextActionCreator = (text) => {
 return {type: UPDATE_NEW_POST_TEXT, newText: text }
}

export let addNewsActionCreator = () =>{
  return {type:ADD_NEWS}
}
export let updateNewsTextActionCreator = (text) =>{
  return {type: UPDATE_NEW_NEWS_TEXT, newText: text}
}

export let sendMessageActionCreator = () =>{
  return {type: SEND_MESSAGE}
}

export let updateNewMessageBodyActionCreator = (text) =>{
  return {type: UPDATE_NEW_MESSAGE_BODY, newText: text}
}

export default store;