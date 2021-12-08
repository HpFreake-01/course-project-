import React from 'react'
import style from './users.module.css'
import * as axios from 'axios'
import userPhoto from '../../images/user.jpg'

class UsersC extends React.Component{

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount = 50);
        })
    }

    onPageChanged = (numberPage) =>{
        this.props.setCurrentPage(numberPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)
        })
    }
   
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages =[];

        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

        return <div>
            <div>
                {
                    pages.map(p => {
                        return <span 
                        onClick={() =>{this.onPageChanged(p)}}
                        className={this.props.currentPage === p && style.selectedPage}>{p}</span>
                    })
                }
            </div>
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
