import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import p from './profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
    return (
        <div className={p.content}>
            <ProfileInfo isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile}
            profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
           <MyPostsContainer />
        </div>
    )
}

export default Profile;