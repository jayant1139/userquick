// import logo from './logo.svg';
import Calendar from 'react-calendar';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import Coreskill from './Components/Coreskill';
import Header from './Components/Header';
import Main from './Components/Main';
import Profilecenter from './Components/Profilecenter';
import Profileleft from './Components/Profileleft';
import Profileright from './Components/Profileright';


function App() {
  return (
    <>
    <Header/>
    {/* <Main/> */}
    <div className="d-flex justify-content-around">
      <div className="d-flex flex-column">
    <Profileleft/>
    <Coreskill/>
    </div>
  <Profilecenter/>
  <Profileright/>
  </div>
  
    </>
  );
}

export default App;
