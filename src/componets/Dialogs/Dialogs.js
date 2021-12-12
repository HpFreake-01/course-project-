import React from 'react'

import d from './dialog.module.css'
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElement = props.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElement = props.messageData.map(message => <Message text={message.text}/>)


    const sendMessage = () => {
        props.sendMessage();
    }

    const onMessageChange = (event) =>{
        let text = event.target.value;
        props.updateNewMessageBody(text);
    }
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={d.messages}>
                    <div>{messageElement}</div>
                    <div>
                        <textarea 
                            value={props.newMessageText} 
                            onChange={onMessageChange}/>
                        <button onClick={sendMessage}>SEND</button>
                    </div>
                </div>
        </div>
    )
}

export default Dialogs;
