import React from 'react'
import userPhoto from '../../images/user.jpg'
import style from './users.module.css'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages =[];

        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }
    return (
        <div>
            <div>
                {pages.map(p => {return <span 
                    onClick={() =>{props.onPageChanged(p)}}
                    className={props.currentPage === p && style.selectedPage}>{p}</span>
                })}
            </div>
        {
                props.users.map(user =><div key={user.id}>
                <span>
                    <div>
                        <img className={style.photo} alt='user' 
                        src={userPhoto}/>
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
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.city'}</div>
                        <div>{'user.location.country'}</div>
                    </span>
                </span>
            </div>)
        }
        </div>
    )
}

export default Users;