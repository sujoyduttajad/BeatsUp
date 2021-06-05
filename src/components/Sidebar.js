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
        faTimes, 
        faUser, 
    } from '@fortawesome/free-solid-svg-icons';
import { MusicContext } from '../context/musicContext';   
import { NavLink } from "react-router-dom"; 

 const Sidebar = () => {

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
                
                <div>
                    <h3>Library</h3>
                    <span className="concentrator-plus-clip"><FontAwesomeIcon size="2x" icon={faClipboardList} /></span>
                </div>
                <div>
                    <h3>Favourites</h3>
                    <span className="concentrator-plus"><FontAwesomeIcon size="2x" icon={faHeart} /></span>
                </div>
                <div>
                    <h3>Playlist</h3>
                    <span className="concentrator-plus"><FontAwesomeIcon size="2x" icon={faCompactDisc} /></span>
                </div>
                <div>
                    <h3>Artists</h3>
                    <span className="concentrator-plus"><FontAwesomeIcon size="2x" icon={faUser} /></span>
                </div>
                <div>
                    <h3>Albums</h3>
                    <span className="concentrator-plus"><FontAwesomeIcon size="2x" icon={faFolder} /></span>
                </div>
            </section>            
            
            <section className="section">
                <p>Custom</p>

                <div>
                    <h3>Themes</h3>
                    <span className="concentrator-plus"><FontAwesomeIcon size="2x" icon={faPalette} /></span>
                </div>
                <div>
                    <h3>Dark</h3>
                    <span className="concentrator"><FontAwesomeIcon size="2x" icon={faLightbulb} /></span>
                </div>
                <div>
                    <h3>Karaoke</h3>
                    <span className="concentrator"><FontAwesomeIcon size="2x" icon={faMicrophoneAlt} /></span>
                </div>
            </section>
            
            <section className="section">
                <p>Apps</p>

                <div>
                    <h3>Radio</h3>
                    <span className="concentrator-plus"><FontAwesomeIcon size="2x" icon={faBroadcastTower} /></span>
                </div>
                <div>
                    <h3>Top-Charts</h3>
                    <span className="concentrator-plus nero"><FontAwesomeIcon size="2x" icon={faHeadphones} /></span>
                </div>
            </section>
                   
            <section className="section">
                <NavLink to="/AboutUs" activeStyle={{ outline: 'none'}} > 
                <div>
                    <h3>About Us</h3>
                </div>
                </NavLink>
            </section>

            </div>           
        </nav>
    )
}

export default Sidebar