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

    let stateCopy = {
        ...state,
        newsData:[...state.newsData]
    }

    switch(action.type) {
        case ADD_NEWS:
            let newNews = {
                id: 4,
                text: stateCopy.newNewsText
            }
            stateCopy.newsData.push(newNews);
            stateCopy.newNewsText = ' ';
            return stateCopy;
        case UPDATE_NEW_NEWS_TEXT:
            stateCopy.newNewsText = action.newText;
            return stateCopy;
        default:
            return stateCopy;
    }
}

export let addNewsActionCreator = () =>{
    return {type:ADD_NEWS}
}
export let updateNewsTextActionCreator = (text) =>{
    return {type: UPDATE_NEW_NEWS_TEXT, newText: text}
}

export default newsReducer;