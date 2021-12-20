import { profileAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_PHOTO = 'SET_PHOTO';

let initialState = {
    postData: [
        {id:1, text:'hello pidor'},
        {id:2, text:'dlkjf;aljdf;aldfjl;aj'},
        {id:3, text:'l;dfjla;dfja;lsdfj'}
      ],
    profile:[],
    status:''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newText = action.newNewsText; //обращение к ориганльному state и взятие у него значение newPostText
            return{
                ...state, //создание копии state
                postData:[...state.postData,{id:4, text:newText}], //создание нового массива с такими же данными и добавдение в конец нового значения newPostText
            };
        case SET_PROFILE:
            return{
                ...state,
                profile: action.payload
            };
        case SET_STATUS:
            return{
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(post => post.id !== action.postId)
            }
        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}
export let addPostActionCreator = (newNewsText) => {
    return {type: ADD_POST, newNewsText} 
}

export let setUserProfile = (profile) =>{
    return{type: SET_PROFILE, payload: profile}
}
export let setUserStatus = (status) =>{
    return {type: SET_STATUS, status}
}

export let deletePost = (postId) =>{
    return {type: DELETE_POST, postId}
}

export let setPhotoSuccess = (photos) =>{
    return {type: SET_PHOTO, photos}
}


export const getUserProfile = (userId) => (dispatch) =>{
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}

export const getStatus = (userId) => (dispatch) =>{
    profileAPI.getStatus(userId)
    .then(response =>{
        dispatch(setUserStatus(response.data));
    })
}
export const updateStatus = (status) => (dispatch) =>{
    profileAPI.updateStatus(status)
    .then(response =>{
        if(response.data.resultCode === 0){
            dispatch(setUserStatus(status))
        }
    })
}

export const savePhoto = (file) => async (dispatch) =>{
    let response = await profileAPI.savePhoto(file);
    if(response.data.resultCode === 0){
        dispatch(setPhotoSuccess(response.data.data.photos))
    }
}

export default profileReducer;

