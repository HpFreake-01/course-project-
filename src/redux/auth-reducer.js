import { authAPI } from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth: false
}


const authReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}


export let setAuthUserData = (userId, email, login, isAuth) =>{
    return{type: SET_USER_DATA, payload: {userId, email, login, isAuth}};
}


export const getAuthUserData = () => (dispatch) =>{
    authAPI.me()
    .then(response => {
        if(response.data.resultCode === 0){
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        };
    })
}

export const loginUser = (email, password, rememberMe) => (dispatch) =>{
    authAPI.login(email, password, rememberMe)
    .then(response =>{
        if(response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
    })
}

export const logoutUser = () => (dispatch) =>{
    authAPI.logout()
    .then(response =>{
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}


export default authReducer;