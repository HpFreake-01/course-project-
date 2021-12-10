import React from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, toggleIsFetching,  setTotalUsersCount, setUsers, unfollow, toggleFollowingProgress} from '../../redux/users-reducer';
import Users from './Users'
import preloader from '../../images/preload.svg'
import { getUsersApi } from '../../API/api';


class UsersApiComponent extends React.Component{

    componentDidMount(){
        this.props.toggleIsFetching(true);
        getUsersApi(this.props.currentPage, this.props.pageSize)
        .then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount = 80);
        })
    }

    onPageChanged = (numberPage) =>{
        this.props.setCurrentPage(numberPage);
        this.props.toggleIsFetching(true);
        getUsersApi(numberPage, this.props.pageSize)
        .then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
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
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}


const UsersContainer = connect(mapStateToProps,{ 
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress,
    toggleIsFetching})(UsersApiComponent);

export default UsersContainer;
