import { BrowserRouter, Route} from 'react-router-dom';
import './app-wrapper.css';
import Dialogs from './componets/Dialogs/Dialogs';
import Profile from './componets/Profile/Profile'
import News from './componets/News/News';
import Header from './componets/Header/Header';
import Sidebar from './componets/Sidebar/Sidebar';


const App = (props) =>{
  return(
    <BrowserRouter>
      <div className="app-wrapper">
            <Header/>
            <div className="app-wrapper-content">
                <Route path='/profile' render={() => <Profile 
                profilePage={props.state.profilePage} 
                dispatch={props.dispatch}/>}/>
                <Route path='/dialogs' render={() => <Dialogs 
                state={props.state.messagesPage}/>}/>
                <Route path='/news' render={() => <News 
                newsPage={props.state.newsPage} 
                dispatch={props.dispatch}
                />}/>
            </div>
            <Sidebar/>
          </div>
    </BrowserRouter>
  )
}
export default App;
