import React from 'react'

import d from './dialog.module.css'
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message';

import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../helpers/validators/validator';
import { Textarea } from '../common/FormControl';


const Dialogs = (props) => {

    let dialogsElement = props.dialogData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    let messageElement = props.messageData.map(message => <Message key={message.id} text={message.text}/>)

    const addNewMessage = (values) =>{
        props.sendMessage(values.newMessageBody);
    }
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={d.messages}>
                    <div>{messageElement}</div>
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
        </div>
    )
}

const maxLength30 = maxLengthCreator(30)

const AddMessageForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} 
            name='newMessageBody'
            validate={[required, maxLength30]} 
            placeholder='enter your message'/>
            <button>SEND</button>
        </form>      
    )
}

const AddMessageFormRedux = reduxForm({
    form:'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;
