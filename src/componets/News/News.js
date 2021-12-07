import React from 'react'
import NewsElement from './NewsElement/NewsElement';


const News = (props) => {
    let newsElement = props.newsData.map( item => <NewsElement text={item.text}/>);

    let addNews = () =>{
        props.addNews();
    }
    let newsChange = (e) => {
        let text = e.target.value;
        props.updateNewsText(text);
    }
    return (
        <div>
            <div>News</div>
            <textarea onChange={newsChange} value={props.newNewsText}/>
            <button onClick={ addNews }>send</button>
            <div>
                {newsElement}
            </div>
        </div>
    )
}

export default News; 
