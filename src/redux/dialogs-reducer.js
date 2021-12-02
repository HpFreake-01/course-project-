const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) =>{

    switch(action.type) {
        case SEND_MESSAGE:
            state.messageData.push(
                {id:2, text: state.newMessageText});
            state.newMessageText = ' ';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export let sendMessageActionCreator = () =>{
    return {type: SEND_MESSAGE}
}
  
export let updateNewMessageBodyActionCreator = (text) =>{
    return {type: UPDATE_NEW_MESSAGE_BODY, newText: text}
}

export default dialogsReducer;