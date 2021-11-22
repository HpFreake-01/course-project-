import React from 'react';
import Post from './Post/Post';

const postsData = [
    {id:1, text:'hello pidor'},
    {id:2, text:'dlkjf;aljdf;aldfjl;aj'},
    {id:3, text:'l;dfjla;dfja;lsdfj'}
]


let postElement = postsData.map( post => <Post text={post.text}/>)

const MyPosts = (props) => {
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
