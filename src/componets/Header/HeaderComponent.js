import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authMe } from '../../redux/auth-reducer';


class HeaderComponent extends React.Component{

    componentDidMount() {
        this.props.authMe()
    }

    render(){
        return <Header {...this.props}/>;
    }
}

let mapStateToProps = (state) =>{
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email
    }
}

export default connect(mapStateToProps, {authMe})(HeaderComponent);