import React from 'react'
import sb from './sidebar.module.css';

export const Sidebar = () => {
    return (
        <div className={sb.sidebar}>
            <div className={`${sb.item} ${sb.active}`}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={sb.item}>
                <a href='/dialogs'>Dialogs</a>
            </div>
            <div className={sb.item}>
                <a href='/news'>News</a>
            </div>
            <div className={sb.item}>
                <a>Settings</a>
            </div>
        </div>
    )
}

export default Sidebar;
