import React from 'react'
import style from './users.module.css'
import * as axios from 'axios'
import userPhoto from '../../images/user.jpg'

class UsersC extends React.Component{

    showUsers = () =>{
        if(this.props.users.length === 0 ){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
               this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return <div>
        <button onClick={this.showUsers}>Show Users</button>
        {
            this.props.users.map(user =><div key={user.id}>
                <span>
                    <div>
                        <img className={style.photo} alt='user' 
                        src={userPhoto}/>
                    </div>
                    <div>
                        {user.followed 
                        ? <button onClick={() => {this.props.unfollow(user.id)}}>unfollow</button> 
                        : <button onClick={() => {this.props.follow(user.id)}}>follow</button>
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
    }
}

export default UsersC;
