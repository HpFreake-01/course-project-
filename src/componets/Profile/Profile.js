import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from './profile.module.css'

const Profile = () => {
    return (
        <div className={p.content}>
           <MyPosts/>
        </div>
    )
}

export default Profile;