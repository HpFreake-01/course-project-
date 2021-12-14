import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css';

const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.loginBlock}>
                {props.isAuth 
                ? <div>{props.login} - <span onClick={props.logoutUser}>Logout</span></div>
                :<NavLink to='/login'>Login</NavLink>}
                <div>
                    {props.isAuth ? props.email : null}
                </div>
                
            </div>
        </div>
    )
}

export default Header;
