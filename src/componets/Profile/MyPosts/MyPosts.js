import React from 'react';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElement = props.postsData.map( post => <Post post={post} />)

    return (
        <div>
            <div>My Posts</div>
            <textarea/>
            <button>Send</button>
            <div>
               {postElement}
            </div>
        </div>
    )
}

export default MyPosts;
