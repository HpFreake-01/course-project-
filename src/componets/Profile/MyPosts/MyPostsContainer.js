import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => { 
    return{
        postData: state.profilePage.postData, 
        newPostText: state.profilePage.newPostText //назвыние props данных которые будут прокидыватся в компоненту и их путь 
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewPostText:(text) =>{ //название props функций которое будет получать компонета MyPosts и передача данных на уровень высше 
            dispatch(updateNewPostTextActionCreator(text)); //import action функции и передача в нее значения textarea 
        },
        addPost:() => {
            dispatch(addPostActionCreator()); 
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts); //вызов метода connect и передача данных в компоненту 

export default MyPostsContainer;
