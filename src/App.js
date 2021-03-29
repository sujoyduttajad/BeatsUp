import React, {useState, useContext} from 'react';
// import styles
import "./styles/app.scss";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MusicContext } from './context/musicContext';



function App() {
  
  const [libraryStatus, setLibraryStatus] = useContext(MusicContext);
  

  return (
    
      <Router>
        <div className={`App ${libraryStatus ? "library-active" : ""}`} >
            <nav><Header /></nav>
            <aside>
                <Sidebar />
            </aside>
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
        </div>
      </Router>
    
  );
}

export default App;
