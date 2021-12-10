import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import newsReducer from './news-reducer'
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    auth: authReducer

});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;