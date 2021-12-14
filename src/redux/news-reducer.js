const ADD_NEWS = 'ADD-NEWS';

let initialState = {
    newsData: [
        {id:1, text:'hello pidor'},
        {id:2, text:'dlkjf;aljdf;aldfjl;aj'},
        {id:3, text:'l;dfjla;dfja;lsdfj'}
      ]
}

const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEWS:
            let newText = action.newNewsText;
            return{
                ...state,
                newNewsText:'',
                newsData:[...state.newsData,{id:4, text:newText}]
            };
        default:
            return state;
    }
}
export let addNewsActionCreator = (newNewsText) =>{
    return {type:ADD_NEWS, newNewsText}
}


export default newsReducer;