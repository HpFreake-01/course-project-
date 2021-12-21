import { BrowserRouter, Route} from 'react-router-dom';
import './app-wrapper.css';
import Sidebar from './componets/Sidebar/Sidebar';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import NewsContainer from './componets/News/NewsContainer';
import UsersContainer from './componets/Users/UsersContainer';
import ProfileContainer from './componets/Profile/ProfileContainer';
import HeaderComponent from './componets/Header/HeaderComponent';
import Login from './componets/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { initializedApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './componets/common/Preloader';
import { Redirect } from 'react-router';


class App extends React.Component {
  componentDidMount() {

    this.props.initializedApp();

  }
  render() {

    if(!this.props.initialized){
      return <Preloader/>
    }

    return(
      <BrowserRouter>
        <div className="app-wrapper">
            <HeaderComponent/>
            <div className="app-wrapper-content">
                <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/news' render={() => <NewsContainer />}/>
                <Route path='/users' render={() =><UsersContainer/>}/>
                <Route path='/login' render={() =><Login/>}/>
            </div>
            <Sidebar/>
            
          </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) =>({
  initialized: state.app.initialized,
  isFetching: state.usersPage.isFetching
})

export default compose(
  //withRouter,
  connect(mapStateToProps, {initializedApp})(App)
)
