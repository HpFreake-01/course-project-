import React from 'react'
import NewsElement from './NewsElement/NewsElement';


let addNewsActionCreator = () =>{
    return {type:'ADD-NEWS'}
}
let updateNewsTextActionCreator = (text) =>{
    return {type:'UPDATE-NEW-NEWS-TEXT', newText: text}
}

const News = (props) => {
    let newsElement = props.newsPage.newsData.map( item => <NewsElement text={item.text}/>);

    let refNewsText = React.createRef();

    let addNews = () =>{
        props.dispatch(addNewsActionCreator());
    }
    let onNewsChange = () => {
        let text = refNewsText.current.value;
        props.dispatch(updateNewsTextActionCreator(text));
    }
    return (
        <div>
            <div>News</div>
            <textarea onChange={onNewsChange} ref={ refNewsText } value={props.newsPage.newNewsText}/>
            <button onClick={ addNews }>send</button>
            <div>
                {newsElement}
            </div>
        </div>
    )
}

export default News; 
