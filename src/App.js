import { BrowserRouter, Route} from 'react-router-dom';
import './app-wrapper.css';

import Header from './componets/Header/Header';
import Sidebar from './componets/Sidebar/Sidebar';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import NewsContainer from './componets/News/NewsContainer';
import UsersContainer from './componets/Users/UsersContainer';
import ProfileContainer from './componets/Profile/ProfileContainer';


const App = (props) =>{
  return(
    <BrowserRouter>
      <div className="app-wrapper">
            <Header/>
            <div className="app-wrapper-content">
                <Route path='/profile' render={() => <ProfileContainer />}/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/news' render={() => <NewsContainer />}/>
                <Route path='/users' render={() =><UsersContainer/>}/>
            </div>
            <Sidebar/>
          </div>
    </BrowserRouter>
  )
}
export default App;
