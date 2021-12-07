const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id:1, text:'hello pidor'},
        {id:2, text:'dlkjf;aljdf;aldfjl;aj'},
        {id:3, text:'l;dfjla;dfja;lsdfj'}
      ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        postData:[...state.postData]
    }

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: stateCopy.newPostText
              }
              stateCopy.postData.push(newPost);
              stateCopy.newPostText = ' ';
              return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return stateCopy;

    }
}
export let addPostActionCreator = () => {
    return {type: ADD_POST}
}
export let updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default profileReducer;