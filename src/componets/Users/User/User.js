import React from 'react'
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../images/user.jpg'
import style from '../users.module.css'

const User = ({user, ...props}) => {
    return (
        <div>
            <span>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                            <img className={style.photo} alt='user' src={user.photos.small != null ? user.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed 
                        ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.unfollow(user.id)
                        }}>unfollow</button> 
                        : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.follow(user.id)
                        }}>follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.city'}</div>
                        <div>{'user.location.country'}</div>
                    </span>
                </span>
        </div>
    )
}

export default User;