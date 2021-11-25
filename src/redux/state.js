import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        postData: [
            {id:1, text:'hello pidor'},
            {id:2, text:'dlkjf;aljdf;aldfjl;aj'},
            {id:3, text:'l;dfjla;dfja;lsdfj'}
          ]
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
          ]
    }
}

export let addPost = (textPost) =>{
  let newPost = {
    id: 5,
    text: textPost
  }
  state.profilePage.postData.push(newPost);
  rerenderEntireTree(state);
}
export let addNews = (newsText) =>{
  let newNews = {
    id: 4,
    text: newsText
  }
  state.newsPage.newsData.push(newNews);
  rerenderEntireTree(state);
}
export default state;