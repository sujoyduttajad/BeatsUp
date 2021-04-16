import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog, faHeadphones, faHeadphonesAlt, faHome, faMusic, faSearch, faSmile, faSortDown, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {Divider, Menu, MenuItem, Fab} from '@material-ui/core';
import logo from "../images/Group3.svg";
import { MusicContext } from '../context/musicContext';

const useStyles = makeStyles((theme) => ({
    avatar: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        marginRight: 0,
      },
      position: 'relative',
      left: '8.8rem',
      cursor: 'pointer',
      zIndex: 1
    },
    dropdown: {
        width: "50px",
        height: "36px",
        position: 'relative',
        left: '8.2rem',
        background: "#343a40",
        borderRadius: "0px 20px 20px 0px",
        '&:hover': {
            background: "#495057",
        }
    },
    orange: {
      color: "#181A19",
      backgroundColor: "#EE6C4D",
    },
    divider: {
        width: '0.05rem',
        height: '3rem',
        position: 'relative',
        left: '8rem',
        zIndex: 500,
        marginLeft: '0.2rem',
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
      listItem: {
        padding: "0.45rem 3rem",
        fontSize: '1.18rem',
        paddingLeft: '1.8rem',
        // color: "#bfc0c0",
        color: "#EE6C4D"
        // '&:hover': {
        //     backgroundColor: "#4E575F",
        // }
      },
      menu: {
        width: '23rem',
        padding: '10px',
        paddingBottom: '15px',
        marginTop: '3.1em'
      }
  }));


 const Header = () => {

    // Using the context API to share state globally 
    const [libraryStatus, setLibraryStatus] = useContext(MusicContext);
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }
    // Dropdown states
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <nav>
            <div className="header__container">

                <div className={`header__navbar ${libraryStatus ? "header__active" : ""}`}>      
                    <img src={logo} alt="logo" />
                    <h1 className="header__h1"> beatsUp</h1>
                </div>

                <div className="header__navbuttons">
                    <div>
                        <form class="header__form">
                            <input class="header__search__bar" placeholder="Search..." onClick={handleOpen} />
                            
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
                        <button class="btn-about btn-3 btn-3d">
                            <FontAwesomeIcon 
                                className={`header__home `} 
                                size="2x" 
                                icon={faSmile} 
                            />
                            <span>About</span>
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

                    <div className={classes.avatar}>
                        <Avatar className={classes.orange}>SD</Avatar>
                        {/* <div className={classes.dropdown}></div> */}    
                    </div>   
                    <div>                 
                        <Fab className={classes.dropdown} variant="extended" onClick={handleClick}>
                            <FontAwesomeIcon 
                                className={`avatar__dropdown `} 
                                size="1x" 
                                icon={faSortDown} 
                            />
                        </Fab>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            variant='selectedMenu'
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'bottom'
                            }}
                            elevation={22}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'bottom'
                            }}
                            className={classes.menu}
                        >
                        {/* <List className={classes.menu}  component="nav" aria-label="main mailbox folders"> */}
                            <MenuItem className={classes.listItem} onClick={handleClose}>Profile</MenuItem>
                            <MenuItem className={classes.listItem} onClick={handleClose}>Inbox</MenuItem>
                            <MenuItem className={classes.listItem} onClick={handleClose}>Social</MenuItem>
                            <MenuItem className={classes.listItem} onClick={handleClose}>Curator</MenuItem>
                            <hr className='hr' />
                            <MenuItem className={classes.listItem} onClick={handleClose}>Log Out</MenuItem>
                        {/* </List> */}
                        </Menu>
                        </div> 
                       
                </div>
            </div>
            
        </nav>
        
    )
}

export default Header