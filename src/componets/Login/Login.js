import React from 'react'
import { reduxForm, Field} from 'redux-form'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} component={'input'} name={'login'}/>
            </div>
            <div>
                <Field placeholder={'password'} component={'input'} name={'password'}/>
            </div>
            <div>
                <Field type={'checkbox'} component={'input'} name={'rememberMe'}/> remember me 
            </div>
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
        console.log(formData)
    }

    return (
        <>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

export default Login;