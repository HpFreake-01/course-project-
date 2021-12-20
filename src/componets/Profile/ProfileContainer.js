import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus, savePhoto } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { compose } from "redux";

class ProfileContainer extends React.Component{

    refreshProfile(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.id;
            if(!userId){
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount(){
        this.refreshProfile();
    }
    componentComponentUpdate(prevProps, prevState, snapshot){
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile();
        }
    }
        render(){
            return (<Profile {...this.props} isOwner={!this.props.match.params.userId} profile={this.props.profile} 
                status={this.props.status} updateStatus={this.props.updateStatus} savePhoto={this.props.savePhoto} />)
        }
}


let mapStateToProps = (state) =>{
    return{
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        id: state.auth.userId
    }
}



export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    )(ProfileContainer);