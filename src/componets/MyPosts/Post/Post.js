import React from 'react';
import p from './post.module.css';

const Post = (props) => {
    return (
        <div>
            {props.message}
        </div>
    )
}

export default Post;
