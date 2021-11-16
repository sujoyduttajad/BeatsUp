import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
    root: {
        width: '100%',
    },  
    container: {
        maxHeight: 550,
        padding: "1.2rem",
        paddingTop: 0,
    },
    rows: {
        border: "1px solid #000",
        backgroundColor: "#ffffff",
        borderRadius: "50px"
    }
  });

export default function LibrarySong({
    songsLib, 
    currentSong, 
    setSongsLib, 
    isPlaying, 
    setIsPlaying, 
    audioRef, 
    song, 
    setCurrentSong
}) {

    // const {song} = props;
    const classes = useStyles();

    
    // currentSong.id === song.id
    const selectSong = async () => {

        /*   ##############            Active SONG HANDLER           ##############      */

        // This code changes the active song in the player when clicked on
        await setCurrentSong(song);
        // Add Active Song
        //id -> song that you click on
        //song.id -> represents the song from the state
        const newSongs = songsLib.map((song) => {
            if(song.id === currentSong.id){
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongsLib(newSongs);
        /*   ##############            Active SONG HANDLER           ##############      */

        /*   ##############            CURRENT SONG PLAYER           ##############      */
        
        // This code executes only when isPlaying is true and the currentSong 
        // in the player matches the song which is clicked on the library
        if(isPlaying && currentSong.id === song.id) {
            audioRef.current.pause();
            console.log(currentSong)
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            console.log(currentSong)
            setIsPlaying(true);
        }
        /*   ##############            CURRENT SONG PLAYER           ##############      */
    }

    return (

            <TableRow className={classes.rows} >
                <TableCell align="center">
                    <FontAwesomeIcon
                    onClick={selectSong} 
                    className="play-pause" 
                    size="2x" 
                    icon={(currentSong.id === song.id) && isPlaying ? faPause : faPlay} />
                </TableCell>
                <TableCell className={`library-song`} align="center"><img src={song.cover} alt={song.name} /></TableCell>
                <TableCell className={`library-song`} align="center"><h6>{song.name}</h6></TableCell>
                <TableCell className={`library-song`} align="center"><h6>{song.artist}</h6></TableCell>
                <TableCell className={`library-song`} align="center"><h6>{song.album}</h6></TableCell>
                <TableCell className={`library-song`} align="center"><h6>{song.duration}</h6></TableCell>
            </TableRow>
        
    )
}