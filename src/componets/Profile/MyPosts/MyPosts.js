import React from 'react';
import Post from './Post/Post';



const MyPosts = (props) => {

    let postElement = props.postData.map( post => <Post text={post.text} />);

    let onAddPost = () => {
        props.addPost();//вызов функций которые передались через props
    }
    let onPostChange = (event) =>{
        let text = event.target.value;
        props.updateNewPostText(text);//вызов функций которые передались через props и передача данных на уровень высше
    }

    return (
        <div>
            <div>My Posts</div>
            <textarea onChange={onPostChange} value={props.newPostText}/>
            <button onClick={ onAddPost }>Send</button>
            <div>
               {postElement}
            </div>
        </div>
    )
}

export default MyPosts;
