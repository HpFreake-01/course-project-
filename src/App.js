import { isValidElement } from 'react';
import './app-wrapper.css';
import Header from './componets/Header';
import MainContent from './componets/MainContent';
import Sidebar from './componets/Sidebar';

const App = () =>{
  return(
    <div className="app-wrapper">
      <Header/>
      <MainContent/>
      <Sidebar/>
    </div>
  )
}
export default App;
