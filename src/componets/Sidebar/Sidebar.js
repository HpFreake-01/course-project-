import React from 'react'
import sb from './sidebar.module.css';

export const Sidebar = () => {
    return (
        <div className={sb.sidebar}>
            <div className={`${sb.item} ${sb.active}`}>
                <a>Profile</a>
            </div>
            <div className={sb.item}>
                <a>Message</a>
            </div>
            <div className={sb.item}>
                <a>News</a>
            </div>
            <div className={sb.item}>
                <a>Settings</a>
            </div>
        </div>
    )
}

export default Sidebar;
