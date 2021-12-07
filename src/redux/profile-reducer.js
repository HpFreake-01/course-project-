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
    switch (action.type) {
        case ADD_POST:
            let newText = state.newPostText;
            return{
                ...state,
                newPostText:'',
                postData:[...state.postData,{id:4, text:newText}]
            };
        case UPDATE_NEW_POST_TEXT:
            return{
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}
export let addPostActionCreator = () => {
    return {type: ADD_POST}
}
export let updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default profileReducer;
