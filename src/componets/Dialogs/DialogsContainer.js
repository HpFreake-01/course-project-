import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageActionCreator} from '../../redux/dialogs-reducer';
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
        sendMessage: (newMessageBody) =>{
            dispatch(sendMessageActionCreator(newMessageBody));
        }
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    )(Dialogs);