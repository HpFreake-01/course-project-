import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageActionCreator} from '../../redux/dialogs-reducer';
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
        sendMessage: (newMessageBody) =>{
            dispatch(sendMessageActionCreator(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    )(Dialogs);