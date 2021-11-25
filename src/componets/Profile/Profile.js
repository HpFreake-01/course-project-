import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from './profile.module.css'



const Profile = (props) => {
    return (
        <div className={p.content}>
           <MyPosts postsData={props.state.postData}/>
        </div>
    )
}

export default Profile;