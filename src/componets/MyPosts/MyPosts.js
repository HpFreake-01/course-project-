import React from 'react';
import mp from './myposts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div>My Posts</div>
            <textarea/>
            <button>Send</button>
            <div>
                <Post message="hello world"/>
                <Post message="ty pidor"/> 
            </div>
        </div>
    )
}

export default MyPosts;
