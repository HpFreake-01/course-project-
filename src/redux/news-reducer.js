const ADD_NEWS = 'ADD-NEWS';
const UPDATE_NEW_NEWS_TEXT = 'UPDATE-NEW-NEWS-TEXT';

const newsReducer = (state, action) => {
    
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

export default newsReducer;