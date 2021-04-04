import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog, faHeadphones, faHeadphonesAlt, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
// import logo from "../images/Group.svg";
// import logo from "../images/Group2.svg";
import logo from "../images/Group3.svg";


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
      position: 'relative',
      left: '11.2rem'
    },
    orange: {
      color: "#181A19",
      backgroundColor: "#EE6C4D",
    },
    divider: {
        width: '0.05rem',
        height: '3rem',
        position: 'relative',
        left: '10rem',
        zIndex: 500,
        border: `1px solid #343a40`,
        borderRadius: "10px",
        backgroundColor: "#343a40",
        color: "#343a40",
        '& svg': {
          margin: theme.spacing(1.5),
        },
        '& hr': {
          margin: theme.spacing(0, 0.5),
        },
      },
  }));


 const Header = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }


    return (
        <nav>
            <div className="header__container">
                <div className="header__navbar">      
                    {/* <FontAwesomeIcon size="3x" icon={faHeadphonesAlt} />   */}
                    {/* <div className="logo"></div> */}
                    <img src={logo} alt="logo" />
                    <h1 className="header__h1"> beatsUp</h1>
                </div>
                <div className="header__navbuttons">
                    <div>
                        <form class="header__form">
                            <input class="header__search__bar" placeholder="Search..." onClick={handleOpen} />
                            {/* <input type="header__submit" value="GO" href="#"></input>     */}
                            <FontAwesomeIcon 
                                className={`header__submit `} 
                                size="2x" 
                                icon={faSearch} 
                            />
                        </form>
                    </div>
                    <div>
                        <button class="btn btn-3 btn-3d">
                            <FontAwesomeIcon 
                                className={`header__home `} 
                                size="2x" 
                                icon={faHome} 
                            />
                            <span>Home</span>
                        </button>
                        
                    </div>
                    <div>
                    <button class="btn-settings btn-3 btn-3d">
                            <FontAwesomeIcon 
                                className={`header__home `} 
                                size="2x" 
                                icon={faCog} 
                            />
                            <span>Settings</span>
                        </button>
                    </div>
                    <div>
                    <button class="btn-bell btn-3 btn-3d">
                            <FontAwesomeIcon 
                                className={`header__home `} 
                                size="2x" 
                                icon={faBell} 
                            />
                            {/* <span>Settings</span> */}
                        </button>
                    </div>

                    <div className={classes.divider}>
                        <Divider orientation="vertical" flexItem />
                    </div>

                    <div className={classes.root}>
                        <Avatar className={classes.orange}>SD</Avatar>
                    </div>
                </div>
            </div>
            
        </nav>
        
    )
}

export default Header