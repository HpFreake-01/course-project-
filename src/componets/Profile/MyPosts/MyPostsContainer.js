import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => { 
    return{
        postData: state.profilePage.postData, 
        newPostText: state.profilePage.newPostText //назвыние props данных которые будут прокидыватся в компоненту и их путь 
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addPost:(newNewsText) => {
            dispatch(addPostActionCreator(newNewsText)); 
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts); //вызов метода connect и передача данных в компоненту 

export default MyPostsContainer;
