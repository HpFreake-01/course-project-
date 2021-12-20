import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { reduxForm, Field} from 'redux-form'
import { loginUser } from '../../redux/auth-reducer';
import { Input } from '../common/FormControl';
import { required } from '../helpers/validators/validator';
import style from '../common/formControl.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} 
                validate={[required]} 
                component={Input} 
                name={'email'}/>
            </div>
            <div>
                <Field placeholder={'Password'} 
                validate={[required]} component={Input} 
                name={'password'} type={'password'}/>
            </div>
            <div>
            <Field type={'checkbox'} 
                component={Input} 
                name={'rememberMe'}/> remember me 
            </div>
            {props.error && <div className={style.formSummeryError}>{props.error}</div>}
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) =>{
        props.loginUser(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }
    return (
        <>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginUser})(Login);