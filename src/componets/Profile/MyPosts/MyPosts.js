import React from 'react';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElement = props.profilePage.postData.map( post => <Post text={post.text} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div>My Posts</div>
            <textarea onChange={ onPostChange } ref={newPostElement} value={props.profilePage.newPostText}/>
            <button onClick={ addPost }>Send</button>
            <div>
               {postElement}
            </div>
        </div>
    )
}

export default MyPosts;
