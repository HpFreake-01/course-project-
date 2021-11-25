import React from 'react'
import NewsElement from './NewsElement/NewsElement';

const News = (props) => {
    debugger;
    let newsElement = props.state.newsData.map( item => <NewsElement text={item.text}/>);
    return (
        <div>
            News
            {newsElement}
        </div>
    )
}

export default News; 
