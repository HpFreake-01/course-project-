import { connect } from 'react-redux';
import { addNewsActionCreator, updateNewsTextActionCreator } from '../../redux/news-reducer';
import News from './News';

let mapStateToProps = (state) =>{
    return{
        newsData: state.newsPage.newsData,
        newNewsText: state.newsPage.newNewsText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addNews:() =>{
            dispatch(addNewsActionCreator())
        },
        updateNewsText:(text) =>{
            dispatch(updateNewsTextActionCreator(text))
        }
    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer; 