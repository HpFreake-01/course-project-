import React from 'react';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElement = props.postsData.map( post => <Post text={post.text} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let textPost = newPostElement.current.value;
        props.addPost(textPost);
        newPostElement.current.value = ' ';
    }

    return (
        <div>
            <div>My Posts</div>
            <textarea ref={newPostElement}/>
            <button onClick={ addPost }>Send</button>
            <div>
               {postElement}
            </div>
        </div>
    )
}

export default MyPosts;
