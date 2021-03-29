import React, {useState, useRef, useContext} from 'react';
// import styles
import "../styles/app.scss";
import Player from './Player';
import Song from './Song';
import data from '../data';
import Library from './Library';
import { MusicContext } from '../context/musicContext';


export default function Home() {

  // Using the context API to share state globally 
  const [libraryStatus, setLibraryStatus] = useContext(MusicContext);

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

  return (
    <div className={`App`} >
      
        {/* <nav><Header /></nav> */}
        <div className="container">
            <div className='row player-container'>
                <div className="col-lg-8">
                    <Player 
                    audioRef={audioRef}
                    songs={songs}
                    currentSong={currentSong}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying} 
                    songInfo={songInfo}
                    setSongInfo={setSongInfo}
                    setSongs={setSongs}
                    setCurrentSong={setCurrentSong}
                    setRepeat={setRepeat}
                    repeat={repeat}
                    />
                </div>
                <div className="col-lg-4">
                <Song currentSong={currentSong}/>
                </div>
            </div>
            <div className="row player-container">
                <section>
                <Library 
                    songs={songs}
                    currentSong={currentSong}
                    setCurrentSong={setCurrentSong}
                    audioRef={audioRef} 
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    setSongs={setSongs}
                    songInfo={songInfo}
                />
                    <audio 
                        onTimeUpdate={timeUpdateHandler}
                        onLoadedMetadata={timeUpdateHandler} 
                        ref={audioRef} 
                        src={currentSong.audio}
                        onEnded={songEndHandler}
                    ></audio>
                </section>
            </div>
      </div>
      <footer className="footer"></footer>
    </div>
    
  );
}


