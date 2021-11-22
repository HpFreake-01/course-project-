import React from 'react'
import d from './dialog.module.css'
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message';


const dialogData = [
    {id:1, name:'max'},
    {id:2, name:'vlad'},
    {id:3, name:'diana'},
    {id:4, name:'ihor'}
]

const messageData = [
    {id:1, text:'klajlkadjsfl;aksfj'},
    {id:2, text:'fklgjsldkfgjlskd;fgj'}
]




let dialogsElement = dialogData.map( dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
let messageElement = messageData.map(message => <Message text={message.text}/>)

const Dialogs = (props) => {
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
