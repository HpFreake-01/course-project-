import React from 'react';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../helpers/validators/validator'
import { Textarea } from '../../common/FormControl';

const maxLegth = maxLengthCreator(30);

const AddPost = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newPostText'} validate={[required, maxLegth]} />
            <button>Send</button>
        </form>
    )
}


const MyPosts = (props) => {
  
      let postElement = props.postData.map( post => <Post key={post.id} text={post.text} />);
    
    let onAddPost = (values) => {
        props.addPost(values.newPostText);//вызов функций которые передались через props
    }
    return (
        <div>
            <div>My Posts</div>
            <AddPostForm onSubmit={onAddPost} />
            <div>
               {postElement}
            </div>
        </div>
    )
}

const AddPostForm = reduxForm({
    form: 'AddForm'
})(AddPost);

export default MyPosts;
