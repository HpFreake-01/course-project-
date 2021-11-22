import React from 'react'
import { NavLink } from 'react-router-dom';
import d from './dialog.module.css'

const DialogItem = (props) =>{
    let path = '/dialog/' + props.id;
    return(
        <div className={d.dialog + ' ' + d.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) =>{
    return(
        <div className={d.message}>{props.message}</div>
    )
}

const dialogData = [
    {id:1, name:'max'},
    {id:2, name:'vlad'},
    {id:3, name:'diana'},
    {id:4, name:'ihor'}
]
const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <DialogItem id='1' name='max'/>
                <DialogItem id='2' name='vlad'/>
                <DialogItem id='3' name='diana'/>
                <DialogItem id='4' name='ihor'/>
            </div>
            <div className={d.messages}>
                    <Message message='helloo'/>
                </div>
        </div>
    )
}

export default Dialogs;
