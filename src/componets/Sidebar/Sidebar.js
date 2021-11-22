import React from 'react'
import { NavLink } from 'react-router-dom';
import sb from './sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={sb.sidebar}>
            <div className={sb.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={sb.item} >
                <NavLink to='/dialogs' >Dialogs</NavLink>
            </div>
            <div className={sb.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
        </div>
    )
}

export default Sidebar;
