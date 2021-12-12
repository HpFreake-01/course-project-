import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';


let mapStateToProps = (state) =>{
    return{
        messageData: state.messagesPage.messageData,
        dialogData: state.messagesPage.dialogData,
        newMessageText: state.messagesPage.newMessageText,
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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    )(Dialogs);