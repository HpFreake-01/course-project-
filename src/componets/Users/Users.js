import React from 'react'
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';

const Users = (props) => {
    return (
        <div>
            <Paginator totalItemsCount={props.totalUsersCount} 
            pageSize={props.pageSize} 
            onPageChanged={props.onPageChanged} 
            currentPage={props.currentPage}/>
            <div>
                { 
                props.users.map(user => <User key={user.id} 
                        user={user} unfollow={props.unfollow} 
                        follow={props.follow} 
                        followingInProgress={props.followingInProgress} /> )
                }
            </div>
        </div>
    )
}

export default Users;