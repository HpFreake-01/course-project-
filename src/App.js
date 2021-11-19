import './app-wrapper.css';
import Header from './componets/Header/Header';

import Profile from './componets/Profile/Profile';
import Sidebar from './componets/Sidebar/Sidebar';

const App = () =>{
  return(
    <div className="app-wrapper">
      <Header/>
      <Profile/>
      <Sidebar/>
    </div>
  )
}
export default App;
