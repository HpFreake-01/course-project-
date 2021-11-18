import React from 'react'
import sb from './sidebar.module.css';

export const Sidebar = () => {
    return (
        <div className={sb.sidebar}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Message</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </div>
    )
}

export default Sidebar;
