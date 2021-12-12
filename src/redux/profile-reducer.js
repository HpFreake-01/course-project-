import { profileAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postData: [
        {id:1, text:'hello pidor'},
        {id:2, text:'dlkjf;aljdf;aldfjl;aj'},
        {id:3, text:'l;dfjla;dfja;lsdfj'}
      ],
    newPostText: '',
    profile:[],
    status:''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newText = state.newPostText; //обращение к ориганльному state и взятие у него значение newPostText
            return{
                ...state, //создание копии state
                newPostText:'', //занулиение поля при добавлении нового поста
                postData:[...state.postData,{id:4, text:newText}] //создание нового массива с такими же данными и добавдение в конец нового значения newPostText
            };
        case UPDATE_NEW_POST_TEXT:
            return{
                ...state,
                newPostText: action.newText //добавление занчений которые приходят с action 
            };
        case SET_PROFILE:
            return{
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return{
                ...state,
                status: action.status
            };
        default:
            return state;
    }
}
export let addPostActionCreator = () => {
    return {type: ADD_POST} 
}
export let updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text } //action для получение значения с textarea (text) и слидением за состоянием
}
export let setUserProfile = (profile) =>{
    return{type: SET_PROFILE, profile}
}
export let setUserStatus = (status) =>{
    return {type: SET_STATUS, status}
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

export default profileReducer;
