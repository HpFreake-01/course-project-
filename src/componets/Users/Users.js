import React from 'react'
import { NavLink } from 'react-router-dom';
import userPhoto from '../../images/user.jpg'
import style from './users.module.css'
import * as axios from 'axios'

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
                            props.toggleFollowingProgress(true, user.id)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{
                                withCredentials: true,
                                headers: {
                                    "API-KEY":"d376bb9a-6209-4aa9-a1f9-09b6111e847f"
                                }
                            })
                            .then(response => {
                                if(response.data.resultCode === 0){
                                    props.unfollow(user.id)
                                };
                                props.toggleFollowingProgress(false, user.id)
                            })
                        }}>unfollow</button> 
                        : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.toggleFollowingProgress(true, user.id)
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{}, {
                                withCredentials: true,
                                headers:{
                                    "API-KEY":"d376bb9a-6209-4aa9-a1f9-09b6111e847f"
                                }
                            })
                            .then(response => {
                                if(response.data.resultCode === 0){
                                    props.follow(user.id)
                                };
                                props.toggleFollowingProgress(false, user.id)
                            })
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