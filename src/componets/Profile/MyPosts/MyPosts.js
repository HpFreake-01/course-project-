import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import Post from './Post/Post';



const MyPosts = (props) => {

    let postElement = props.profilePage.postData.map( post => <Post text={post.text} />);

    let refPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () =>{
        let text = refPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div>
            <div>My Posts</div>
            <textarea onChange={onPostChange} ref={refPostElement} value={props.profilePage.newPostText}/>
            <button onClick={ addPost }>Send</button>
            <div>
               {postElement}
            </div>
        </div>
    )
}

export default MyPosts;
