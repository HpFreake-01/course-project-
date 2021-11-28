let store = {
  _state: {
    profilePage: {
      postData: [
          {id:1, text:'hello pidor'},
          {id:2, text:'dlkjf;aljdf;aldfjl;aj'},
          {id:3, text:'l;dfjla;dfja;lsdfj'}
        ],
      newPostText: ' '
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
        ]
  },
  newsPage: {
      newsData: [
          {id:1, text:'hello pidor'},
          {id:2, text:'dlkjf;aljdf;aldfjl;aj'},
          {id:3, text:'l;dfjla;dfja;lsdfj'}
        ],
      newNewsText:''
  }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('data changed');
  },
  addPost() {
    let newPost = {
      id: 5,
      text: this._state.profilePage.newPostText
    }
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = ' ';
    this._callSubscriber();
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addNews() {
    let newNews = {
      id: 4,
      text: this._state.newsPage.newNewsText
    }
    this._state.newsPage.newsData.push(newNews);
    this._state.newsPage.newNewsText = ' ';
    this._callSubscriber(this._state);
  },
  updateNewsText(newText) {
    this._state.newsPage.newNewsText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

export default store;