import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import p from './profile.module.css'



const Profile = (props) => {
    return (
        <div className={p.content}>
           <MyPostsContainer />
        </div>
    )
}

export default Profile;