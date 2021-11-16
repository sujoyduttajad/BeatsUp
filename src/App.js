import React, {useState, useRef, } from 'react';
import "./styles/app.scss";
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import AboutUs from './pages/AboutUs';
import LibraryCollection from './pages/LibraryCollection';
import data from './data';

function App() {
 
    //Ref
  // If you need to select a specific HTML tag in your component you can use a reference
  // So to use it import useRef from react
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
//   const [libraryStatus, setLibraryStatus] = useState(false);
  const [repeat, setRepeat] = useState(false);
  
  // Event handler lifted up
  // onTimeUpdate basically runs everytime the time changes in the audio
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // Calculate Percentage
    // This code gets rid of all the decimals
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
        ...songInfo,
        currentTime: current,
        duration: duration,
        animationPercentage: animation
    })
  };
  
  const songEndHandler = async () => {
      let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      if(repeat) {
        await setCurrentSong(songs[(currentIndex)]);     
        if(isPlaying) audioRef.current.play();
      }else {
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);     
        if(isPlaying) audioRef.current.play();
      }
  }
  // console.log(audioRef);

  return (
    
      <Router>

            <Switch>
              <Route path="/" exact >
                <Home 
                  audioRef={audioRef}
                  songs={songs}
                  currentSong={currentSong}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  songInfo={songInfo}
                  setSongInfo={setSongInfo}
                  setSongs={setSongs}
                  setCurrentSong={setCurrentSong}
                  repeat={repeat}
                  setRepeat={setRepeat}
                  timeUpdateHandler={timeUpdateHandler}
                  songEndHandler={songEndHandler}
                />
              </Route>
              <Route path='/login' exact component={LogIn} />
              <Route path='/SignUp' exact component={SignUp} />
              <Route path='/AboutUs' exact component={AboutUs} />
              <Route path='/Library' exact component={LibraryCollection} />
            </Switch>
            
      </Router>
  
    
  );
}

export default App;
