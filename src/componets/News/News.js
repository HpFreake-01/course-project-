import React from 'react'
import NewsElement from './NewsElement/NewsElement';

const News = (props) => {
    let newsElement = props.state.newsData.map( item => <NewsElement text={item.text}/>);

    let refNewsText = React.createRef();
    let addNews = () =>{
        let newsText = refNewsText.current.value;
        props.addNews(newsText);
        refNewsText.current.value = ' ';
    }
    return (
        <div>
            News
            {newsElement}
            <textarea ref={ refNewsText }/>
            <button onClick={ addNews }>send</button>
        </div>
    )
}

export default News; 
