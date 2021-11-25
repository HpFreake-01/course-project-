import React from 'react';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElement = props.postsData.map( post => <Post post={post} />);

    let newPostElement = React.createRef();

    let Click = () => {
        let data = newPostElement.current.value;
        alert(data);
    }

    return (
        <div>
            <div>My Posts</div>
            <textarea ref= {newPostElement}/>
            <button onClick={ Click }>Send</button>
            <div>
               {postElement}
            </div>
        </div>
    )
}

export default MyPosts;
