import React, {useState, useRef, useContext} from 'react';
// import styles
// import "../styles/app.scss";
import Player from '../components/Player';
import Song from '../components/Song';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Library from '../components/Library';
import { MusicContext } from '../context/musicContext';


export default function Home({
  audioRef,
  songs,
  currentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
  setSongs,
  setCurrentSong,
  repeat,
  setRepeat,
  timeUpdateHandler,
  songEndHandler
}) {

  // Using the context API to share state globally 
  const [libraryStatus, setLibraryStatus] = useContext(MusicContext);


  return (

  <>
      <Header />
      <aside><Sidebar /></aside>
      
        <div className={`App ${libraryStatus ? "library-active" : ""}`} >    
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
                      <Song currentSong={currentSong} isPlaying={isPlaying} />
                    </div>
                </div>
                <div className="row player-container">
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
                          draggable={true}
                      ></audio>
                </div>
          </div>
          <footer className="footer"></footer>
        </div>


  </>      
    
  );
}


