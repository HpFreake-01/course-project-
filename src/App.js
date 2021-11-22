import { BrowserRouter, Route} from 'react-router-dom';
import './app-wrapper.css';
import Dialogs from './componets/Dialogs/Dialogs';
import Profile from './componets/Profile/Profile'
import News from './componets/News/News';
import Header from './componets/Header/Header';
import Sidebar from './componets/Sidebar/Sidebar';

const App = () =>{
  return(
    <BrowserRouter>
      <div className="app-wrapper">
            <Header/>
            <div className="app-wrapper-content">
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/dialogs' render={() => <Dialogs/>}/>
                <Route path='/news' render={() => <News/>}/>
            </div>
            <Sidebar/>
          </div>
    </BrowserRouter>
  )
}
export default App;
