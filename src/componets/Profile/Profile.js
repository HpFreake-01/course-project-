import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from './profile.module.css'



const Profile = (props) => {
    return (
        <div className={p.content}>
           <MyPosts profilePage={props.profilePage} 
           addPost={props.addPost} 
           updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;