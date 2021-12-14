import React from 'react'
import NewsElement from './NewsElement/NewsElement';
import { Field, reduxForm } from 'redux-form'


const News = (props) => {
    let newsElement = props.newsData.map( item => <NewsElement text={item.text}/>);

    let addNews = (values) =>{
        props.addNews(values.newNewsText);
    }

    return (
        <div>
            <div>News</div>
            <AddNewNewsForm onSubmit={addNews} />
            <div>
                {newsElement}
            </div>
        </div>
    )
}

const addNewNews = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name='newNewsText'  />
            <button>send</button>
        </form>
    )
}

const AddNewNewsForm = reduxForm({
    form: 'NewsForm'
})(addNewNews);

export default News; 
