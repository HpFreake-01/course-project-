import React from 'react'
import style from './users.module.css'

export const Users = (props) => {

    if(props.users.length === 0 ){
        props.setUsers([
            {id:1,
                photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png',
                fullName:'max chuprun', status:'im a god', location:{city:'obryganca', country:'Portugalia'}, followed: true},
            {id:2, 
                photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png',
                fullName:'vlad pidarok', status:'im a bitch', location:{city:'Kiev', country:'Ukraine'}, followed: false}
        ])
    }

    return (
        <div>
            {
                props.users.map(user =><div key={user.id}>
                    <span>
                        <div>
                            <img className={style.photo} alt='user' src={user.photoUrl}/>
                        </div>
                        <div>
                            {user.followed 
                            ? <button onClick={() => {props.unfollow(user.id)}}>unfollow</button> 
                            : <button onClick={() => {props.follow(user.id)}}>follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.city}</div>
                            <div>{user.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;
