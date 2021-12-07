import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) =>{
    return{
        messageData: state.messagesPage.messageData,
        dialogData: state.messagesPage.dialogData,
        newMessageText: state.messagesPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        sendMessage: () =>{
            dispatch(sendMessageActionCreator());
        },
        updateNewMessageBody:(text) =>{
            dispatch(updateNewMessageBodyActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;