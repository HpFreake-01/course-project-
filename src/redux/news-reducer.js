const ADD_NEWS = 'ADD-NEWS';
const UPDATE_NEW_NEWS_TEXT = 'UPDATE-NEW-NEWS-TEXT';

let initialState = {
    newsData: [
        {id:1, text:'hello pidor'},
        {id:2, text:'dlkjf;aljdf;aldfjl;aj'},
        {id:3, text:'l;dfjla;dfja;lsdfj'}
      ],
    newNewsText:' '
}

const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEWS:
            let newText = state.newNewsText;
            return{
                ...state,
                newNewsText:'',
                newsData:[...state.newsData,{id:4, text:newText}]
            };
        case UPDATE_NEW_NEWS_TEXT:
            return{
                ...state,
                newNewsText: action.newText
            };
        default:
            return state;
    }
}

export let addNewsActionCreator = () =>{
    return {type:ADD_NEWS}
}
export let updateNewsTextActionCreator = (text) =>{
    return {type: UPDATE_NEW_NEWS_TEXT, newText: text}
}

export default newsReducer;