import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app-wrapper.css';
import Dialogs from './componets/Dialogs/Dialogs';
import Profile from './componets/Profile/Profile'
import News from './componets/News/News';
import Header from './componets/Header/Header';
import Sidebar from './componets/Sidebar/Sidebar';

const App = () =>{
  return(
      <div className="app-wrapper">
            <Header/>
            <div className="app-wrapper-content">
              <Routes>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/dialogs' element={<Dialogs/>}/>
                <Route path='/news' element={<News/>}/>
              </Routes> 
            </div>
            <Sidebar/>
          </div>    
  )
}
export default App;
