const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) =>{

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