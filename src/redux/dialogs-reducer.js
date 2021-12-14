const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    dialogData: [
        {id:1, name:'max'},
        {id:2, name:'vlad'},
        {id:3, name:'diana'},
        {id:4, name:'ihor'},
        {id:5, name:'DIMA'}
      ],
      
    messageData: [
        {id:1, text:'klajlkadjsfl;aksfj'},
        {id:2, text:'fklgjsldkfgjlskd;fgj'}
      ]
}

const dialogsReducer = (state = initialState, action) =>{
    switch(action.type) {
        case SEND_MESSAGE:
            let newText = action.newMessageBody;
            return{
                ...state,
                messageData:[...state.messageData,{id:6,text: newText}]
            };
        default:
            return state;
    }
}

export let sendMessageActionCreator = (newMessageBody) =>{
    return {type: SEND_MESSAGE, newMessageBody}
}


export default dialogsReducer;
