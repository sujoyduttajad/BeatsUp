import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LibrarySong from './LibrarySong';
import { MusicContext } from '../context/musicContext';

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
        backgroundColor: "#ffffff",
    }
  });

 const Library = ({ songs, isPlaying, setIsPlaying, audioRef, currentSong, setSongs, setCurrentSong }) => {

    const classes = useStyles();
    // const [isPlaying, setIsPlaying] = useContext(MusicContext);
    

    return (
        <div className="library">
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead className="header">
                    <TableRow>
                        <TableCell align="center"><h3>Play/Pause</h3></TableCell>
                        <TableCell align="center"><h3>Cover</h3></TableCell>
                        <TableCell align="center"><h3>Title</h3></TableCell>
                        <TableCell align="center"><h3>Artists</h3></TableCell>
                        <TableCell align="center"><h3>Album</h3></TableCell>
                        <TableCell align="center"><h3>Duration</h3></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={`library-song`}>
                        {songs.map((song) => (
                            <LibrarySong 
                                key={song.id} 
                                song={song} 
                                songs={songs} 
                                currentSong={currentSong} 
                                setSongs={setSongs} 
                                isPlaying={isPlaying}
                                setIsPlaying={setIsPlaying}
                                audioRef={audioRef}
                                setCurrentSong={setCurrentSong}
                            />
                        ))}  
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Library;