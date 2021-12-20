import React from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, getUsersThunkCreator} from '../../redux/users-reducer';
import Preloader from '../common/Preloader';
import Users from './Users'



class UsersApiComponent extends React.Component{

    componentDidMount(){

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (numberPage) =>{
        this.props.getUsersThunkCreator(numberPage, this.props.pageSize);
    }
   
    render() {
 
        return (
        <>
            <div>
                {this.props.isFetching ? <Preloader/> : null}
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
    setCurrentPage,
    toggleFollowingProgress,
    getUsersThunkCreator})(UsersApiComponent);

export default UsersContainer;
