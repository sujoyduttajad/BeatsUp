import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 
    {   faBars, 
        faBookmark, 
        faBroadcastTower, 
        faClipboardList, 
        faCompactDisc, 
        faCrosshairs, 
        faFolder, 
        faHeadphones, 
        faHeart, 
        faLightbulb, 
        faMicrophoneAlt, 
        faPalette, 
        faSmile, 
        faTimes, 
        faUser, 
    } from '@fortawesome/free-solid-svg-icons';
import { MusicContext } from '../context/musicContext';   
import { NavLink } from "react-router-dom"; 
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';


const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    badge: {
    //   top: "8px",
    //   right: "0px",
    }
  }));


const Sidebar = () => {
    const classes = useStyles();
    const [libraryStatus, setLibraryStatus] = useContext(MusicContext);

    return (
        <nav className={`slideout ${libraryStatus ? "selected" : ''}`}>
           
            <FontAwesomeIcon 
                size="2x" 
                className="icon-bar"
                icon={libraryStatus ? faTimes: faBars} 
                onClick={() => setLibraryStatus(!libraryStatus)} 
            />  
            <div className="sidebar__container">
            <section className="section">
                <p>Collection</p>
                <NavLink to="/Library" activeStyle={{ outline: 'none'}} > 
                    <div>
                        <div className="nav__container"><h3>Library</h3></div>
                        <span className="concentrator-plus-clip"><FontAwesomeIcon size="2x" icon={faClipboardList} /></span>
                    </div>
                </NavLink>
                <div>
                    <Badge 
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }} 
                        className={classes.badge} badgeContent={"Coming Soon"} color="error"
                    >
                        <div className="nav__container"><h3>Favourites</h3></div>
                    </Badge>
                    <span className="concentrator-plus"><FontAwesomeIcon size="2x" icon={faHeart} /></span>
                </div>
                <div>
                    <Badge className={classes.badge} badgeContent={"Coming Soon"} color="error">
                        <div className="nav__container"><h3>Playlist</h3></div>
                    </Badge>
                    <span className="concentrator-plus"><FontAwesomeIcon size="2x" icon={faCompactDisc} /></span>
                </div>
                <div>
                    <Badge className={classes.badge} badgeContent={"Coming Soon"} color="error">
                        <div className="nav__container"><h3>Artists</h3></div>
                    </Badge>
                    <span className="concentrator-plus"><FontAwesomeIcon size="2x" icon={faUser} /></span>
                </div>
                <div>
                    <Badge className={classes.badge} badgeContent={"Coming Soon"} color="error">
                        <div className="nav__container"><h3>Albums</h3></div>
                    </Badge>
                    <span className="concentrator-plus"><FontAwesomeIcon size="2x" icon={faFolder} /></span>
                </div>
            </section>            
            
            <section className="section">
                <p>Custom</p>

                <div>
                    <Badge className={classes.badge} badgeContent={"Coming Soon"} color="error">
                        <div className="nav__container"><h3>Themes</h3></div>
                    </Badge>
                    <span className="concentrator-plus"><FontAwesomeIcon size="2x" icon={faPalette} /></span>
                </div>
                <div>
                    <Badge className={classes.badge} badgeContent={"Coming Soon"} color="error">
                        <div className="nav__container"><h3>Dark</h3></div>
                    </Badge>
                    <span className="concentrator"><FontAwesomeIcon size="2x" icon={faLightbulb} /></span>
                </div>
                <div>
                    <Badge className={classes.badge} badgeContent={"Coming Soon"} color="error">
                        <div className="nav__container"><h3>Karaoke</h3></div>
                    </Badge>
                    <span className="concentrator"><FontAwesomeIcon size="2x" icon={faMicrophoneAlt} /></span>
                </div>
            </section>
            
            <section className="section">
                <p>Apps</p>

                <div>
                    <div className="nav__container"><h3>Radio</h3></div>
                    <span className="concentrator-plus"><FontAwesomeIcon size="2x" icon={faBroadcastTower} /></span>
                </div>
                <div>
                    <div className="nav__container"><h3>Top-Charts</h3></div>
                    <span className="concentrator-plus nero"><FontAwesomeIcon size="2x" icon={faHeadphones} /></span>
                </div>
            </section>
                   
            <section className="section">
                <NavLink to="/AboutUs" activeStyle={{ outline: 'none'}} > 
                    <div>
                        <div className="nav__container"><h3>About Us</h3></div>
                        <span className="concentrator-plus nero"><FontAwesomeIcon size="2x" icon={faSmile} /></span>
                    </div>
                </NavLink>
            </section>

            </div>           
        </nav>
    )
}

export default Sidebar