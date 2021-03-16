import React, {useState} from 'react'
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBackward, faForward, faPause, faPlay, faRandom, faSyncAlt, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
    button: {
      color: "#212529",
    },
  });
const CustomTooltip = withStyles((theme) => ({
    tooltip: {
        boxShadow: theme.shadows[1],
        fontSize: 13,
    },
}))(Tooltip);

export default function Player({ 
    audioRef, 
    songs,
    currentSong, 
    isPlaying, 
    setCurrentSong,
    setIsPlaying, 
    setSongs,
    setSongInfo, 
    setRepeat,
    repeat,
    songInfo }) {
    // State lifted up
    
    // This state hides or displays the badge    
    const [invisible, setInvisible] = useState(false);
    const classes = useStyles();

    const activeLibraryHandler = (nextPrev) => {
        // Add active songs
        const newSongs = songs.map((song) => {
            if(song.id === nextPrev.id) {
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        })
        setSongs(newSongs);
    }
    // Event handlers
    const playSongHandler = () => {
        if(isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }  
    }
    const getTime = (time) => {
        return (
            //Math.floor(time / 60) - gives you minutes
            //Add : before the seconds
            //Math.floor(time % 60) - Everytime we get upto 60 it gets back and start again
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...setSongInfo, currentTime: e.target.value});
    }
    // Choosing a random song
    const randomHandler = async (e) => {
        let randomNumber = Math.ceil(Math.random(songs.length)*10);
        await setCurrentSong(songs[randomNumber]);
        // console.log(randomNumber);
    }
    // Repeat a single song
    const repeathandler = () => {
        setRepeat(true);
        if(repeat) {
            setInvisible(!invisible);
        }
    }
    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        // console.log(songs[(currentIndex + 1) % songs.length]);
        if(direction === "skip-forward") {
          await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
          activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        }
        if(direction === 'skip-back') {
            // Case 1: To avoid errors and crashing of app 
            // This line of code checks if the array is songs[-1]
            // If it is then we set the current song to the last song
            // then we return because if we don't then Case 2 will run and will crash the app  
            if((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
                if(isPlaying) {
                    audioRef.current.play();
                }
                return;
            }
            // Case 2:  this line of code only applies when we are in the middle of the songs array
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
        }
        if(isPlaying) {
            audioRef.current.play();
        }
    }
    // Add the styles
    const trackAnimation = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }

    return (
        <div className="player__area">
            <div className="player">
                <h1>Playing - {currentSong.name}</h1>
                <div className="play-control">
                    <CustomTooltip title="Shuffle" arrow placement="bottom">
                        <Button className={classes.button}>
                        <FontAwesomeIcon 
                            className="skip-back" 
                            onClick={randomHandler}
                            size="3x" 
                            icon={faRandom} 
                        />
                        </Button>
                    </CustomTooltip>
                    <CustomTooltip title="Skip-Back" arrow placement="bottom">
                        <Button className={classes.button}>
                        <FontAwesomeIcon 
                            className="skip-back" 
                            onClick={() => skipTrackHandler('skip-back')}
                            size="3x" 
                            icon={faBackward} 
                        />
                        </Button>
                    </CustomTooltip>
                    <CustomTooltip title="Play" arrow placement="bottom">
                        <Button className={classes.button}>
                        <FontAwesomeIcon                        
                            className="play" 
                            onClick={playSongHandler}
                            size="3x" 
                            icon={isPlaying ? faPause : faPlay} 
                        />
                        </Button>
                    </CustomTooltip>
                    <CustomTooltip title="Forward" arrow placement="bottom">
                        <Button className={classes.button}>
                        <FontAwesomeIcon 
                            className="skip-forward" 
                            onClick={() => skipTrackHandler('skip-forward')}
                            size="3x" 
                            icon={faForward} 
                        />
                        </Button>
                    </CustomTooltip>
                    <CustomTooltip title="Repeat" arrow placement="bottom">
                        <Button className={classes.button}>
                        {repeat ? 
                        <Badge color="primary" badgeContent={1}>
                            <FontAwesomeIcon 
                                className="repeat-song" 
                                onClick={repeathandler}
                                size="3x" 
                                icon={faSyncAlt} 
                            />
                        </Badge> 
                        :   <FontAwesomeIcon 
                                className="repeat-song" 
                                onClick={repeathandler}
                                size="3x" 
                                icon={faSyncAlt} 
                            />
                        }
                        </Button>
                    </CustomTooltip>   
                </div>
                <div className="time-control">
                    <p>{getTime(songInfo.currentTime)}</p>
                    <div 
                        style={{
                        background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`
                        }} 
                        className="track"
                    >
                        <input 
                            type="range"
                            min={0}
                            max={songInfo.duration || 0}
                            value={songInfo.currentTime}
                            onChange={dragHandler} 
                        />
                        <div style={trackAnimation} className="animate-track"></div>
                    </div>    
                    <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
                </div>
            </div>
            <div className="volume-control">
                <FontAwesomeIcon 
                    className="repeat-song" 
                    // onClick={repeathandler}
                    size="2x" 
                    icon={faVolumeUp} 
                />
                <input 
                    type="range"
                    className="volume-slider"
                    orient="vertical"
                    min={0}
                    max={100}
                />
            </div>
            
        </div>
    )
}


