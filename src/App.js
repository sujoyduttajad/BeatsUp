import React from 'react';
// import styles
import "./styles/app.scss";
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import AboutUs from './pages/AboutUs';

function App() {
 
  

  return (
    
      <Router>

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path='/login' exact component={LogIn} />
              <Route path='/SignUp' exact component={SignUp} />
              <Route path='/AboutUs' exact component={AboutUs} />
            </Switch>
            
      </Router>
  
    
  );
}

export default App;
