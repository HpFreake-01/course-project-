import React from 'react'
import style from './formControl.module.css'
 
const FormControl = ({input, meta, child, ...props}) => {

    const showError = meta.touched && meta.error;

    return (
        <div className={style.formControl + ' ' +(showError ? style.error : '')}>
             <div>
                {props.children}
             </div>
             {showError ? <span>{meta.error}</span> : null}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...restProps} {...input}  /></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...restProps} {...input}  /></FormControl>
}

 