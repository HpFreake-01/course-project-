import { rerenderEntireTree } from "../render";

let state = {
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
        newNewsText:' llkjkjl'
    }
}

export let addPost = () =>{
  let newPost = {
    id: 5,
    text: state.profilePage.newPostText
  }
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = ' ';
  rerenderEntireTree(state);
}
export let updateNewPostText = (newText) =>{
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export let addNews = () =>{
  let newNews = {
    id: 4,
    text: state.newsPage.newNewsText
  }
  state.newsPage.newsData.push(newNews);
  state.newsPage.newNewsText = ' ';
  rerenderEntireTree(state);
}
export let updateNewsText = (newText) =>{
  state.newsPage.newNewsText = newText;
  rerenderEntireTree(state);
}
export default state;