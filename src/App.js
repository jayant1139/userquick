// import logo from './logo.svg';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { Redirect, Route, Switch } from 'react-router';
import Profile from './Components/Profile';


function App() {
  return (
    <>
      <Header />
      
      <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/Profile" component={Profile}/>
      <Redirect to="/"/>
      </Switch>
    {/* <Profile/> */}
      {/* <div className="d-flex justify-content-around">
        <div className="d-flex flex-column">
          <Profileleft />
          <Coreskill />
        </div>
        <Profilecenter />
        <Profileright />
      </div> */}

    </>
  );
}

export default App;
