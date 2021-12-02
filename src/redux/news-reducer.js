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
            let newNews = {
                id: 4,
                text: state.newNewsText
            }
            state.newsData.push(newNews);
            state.newNewsText = ' ';
            return state;
        case UPDATE_NEW_NEWS_TEXT:
            state.newNewsText = action.newText;
            return state;
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