import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Routes} from "react-router";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <br/>
        <div>
          <Routes>
            <Route exact path='/' element={<LandingPage/>}/>
            <Route exact path='/register-page' element={<RegisterPage/>}/>
            {/*<Route exact path='/location-list' element={<LocationsList/>}/>*/}
            {/*<Route exact path='/location/:locationId' element={<LocationPage/>}/>*/}
            {/*<Route exact path='/edit-location/:locationId' element={<UpdateForm/>}/>*/}
          </Routes>
        </div>
        <br/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
