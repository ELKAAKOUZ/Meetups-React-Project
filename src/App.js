import {Route,Switch} from 'react-router-dom';
import './App.css';
import MainNavigationBar from './components/Layout/MainNavigationBar';

import AddNewMeetup from './pages/AddNewMeetup';
import AllMeetups from './pages/AllmeetUps';
import MyFavorite from './pages/MyFavorite';

function App() {
  
  return (
    <div>
      <MainNavigationBar/>
    
      
      <Switch>
        <Route path='/' exact>
          <AllMeetups/>
        </Route>
        <Route path='/favorites' exact>
          <MyFavorite/>
        </Route>
        <Route path='/addnewmeetup' exact>
          <AddNewMeetup/>
        </Route>
    </Switch>
    </div>
    
  );
}

export default App;
