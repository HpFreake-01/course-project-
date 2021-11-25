import React from 'react'
import d from './dialog.module.css'
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElement = props.state.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElement = props.state.messageData.map(message => <Message text={message.text}/>)
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={d.messages}>
                    {messageElement}
                </div>
        </div>
    )
}

export default Dialogs;
