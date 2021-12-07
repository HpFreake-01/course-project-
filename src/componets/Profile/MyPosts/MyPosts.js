import React from 'react';
import Post from './Post/Post';



const MyPosts = (props) => {

    let postElement = props.postData.map( post => <Post text={post.text} />);

    let refPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () =>{
        let text = refPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div>My Posts</div>
            <textarea onChange={onPostChange} ref={refPostElement} value={props.newPostText}/>
            <button onClick={ onAddPost }>Send</button>
            <div>
               {postElement}
            </div>
        </div>
    )
}

export default MyPosts;
