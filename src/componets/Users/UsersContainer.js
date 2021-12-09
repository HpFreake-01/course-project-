import React from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, toggleIsFetching,  setTotalUsersCount, setUsers, unfollow} from '../../redux/users-reducer';
import Users from './Users'
import * as axios from 'axios'
import preloader from '../../images/preload.svg'


class UsersApiComponent extends React.Component{

    componentDidMount(){
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials: true
        })
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount = 50);
        })
    }

    onPageChanged = (numberPage) =>{
        this.props.setCurrentPage(numberPage);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`,{
            withCredentials: true
        })
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
        })
    }
   
    render() {
 
        return (
        <>
            <div>
                {this.props.isFetching ? <img alt="preloader" src={preloader}/> : null}
            </div>
            <Users 
                users={this.props.users} 
                onPageChanged={this.onPageChanged} 
                totalUsersCount={this.props.totalUsersCount} 
                pageSize={this.props.pageSize} 
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>)
    }
}

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}


const UsersContainer = connect(mapStateToProps,{ 
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching})(UsersApiComponent);

export default UsersContainer;
