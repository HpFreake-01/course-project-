import React from 'react'
import { NavLink } from 'react-router-dom';
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
                {pages.map(pageNum => {return <span 
                    onClick={() =>{props.onPageChanged(pageNum)}}
                    className={props.currentPage === pageNum && style.selectedPage}>{pageNum}</span>
                })}
            </div>
        {
                props.users.map(user =><div key={user.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                            <img className={style.photo} alt='user' src={userPhoto}/>
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
            </div>)
        }
        </div>
    )
}

export default Users;