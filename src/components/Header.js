import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBoxOpen, faCog, faHeadphones, faHeadphonesAlt, faHome, faMusic, faSearch, faSmile, faSortDown, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {Divider, Menu, MenuItem, Fab} from '@material-ui/core';
import logo from "../images/beatsUp.svg";
import { MusicContext } from '../context/musicContext';
import LogIn from '../pages/LogIn';
import { NavLink } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    avatar: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        marginRight: 0,
      },
      position: 'relative',
      left: '10.8rem',
      cursor: 'pointer',
      zIndex: 1
    },
    dropdown: {
        width: "50px",
        height: "36px",
        position: 'relative',
        left: '10.2rem',
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
        left: '10.5rem',
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
        color: "#EE6C4D",
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: '#414242'        
        }
      },
      menu: {
        width: '23rem',
        padding: '10px',
        paddingBottom: '15px',
        marginTop: '3.1em'
      },

  }));


 const Header = () => {

    // Using the context API to share state globally 
    const [libraryStatus, setLibraryStatus] = useContext(MusicContext);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [modalopen, setModalOpen] = useState(false);

    // const handleModalOpen = () => {
    //     setModalOpen(true);
    // };

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

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <nav>
            <div className="header__container">
            {/* activeStyle - The class to give the element when it is active. 
            The default given class is active. This will be joined with the className prop. 
            The styles to apply to the element when it is active. */}
            <NavLink to="/" activeStyle={{
                    textDecoration: 'none',
                }} >
                <div className={`header__navbar ${libraryStatus ? "header__active" : ""}`}>      
                    <img src={logo} alt="logo" />
                    <h1 className="header__h1"> Beats<span>Up</span></h1>
                </div>
            </NavLink>    

                <div className="header__navbuttons">
                    <div>
                        <form class="header__form">
                            <input className="header__search__bar" placeholder="Search..." onClick={handleOpen} />
                            
                            <FontAwesomeIcon 
                                className={`header__submit `} 
                                size="2x" 
                                icon={faSearch} 
                            />
                        </form>
                    </div>
                    <NavLink to="/" activeStyle={{
                            textDecoration: 'none',
                            outline: 'none'
                        }}>
                        <div>
                            <button className="btn btn-3 btn-3d">
                                <FontAwesomeIcon 
                                    className={`header__home `} 
                                    size="2x" 
                                    icon={faHome} 
                                />                              
                                <span>Home</span>
                            </button>                       
                        </div>
                    </NavLink>

                    <div>
                        <button className="btn-settings btn-3 btn-3d">
                            <FontAwesomeIcon 
                                className={`header__home `} 
                                size="2x" 
                                icon={faBoxOpen} 
                            />
                            <span>Browse</span>
                        </button>
                    </div>
                    <div>
                    <button className="btn-bell btn-3 btn-3d">
                            <FontAwesomeIcon 
                                className={`header__home `} 
                                size="2x" 
                                icon={faBell} 
                            />
                            
                        </button>
                    </div>

                    <div className={classes.divider}>
                        <Divider orientation="vertical" flexItem />
                    </div>

                    <div className={classes.avatar}>
                        <Avatar className={classes.orange}>SD</Avatar>    
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
                        
                            <MenuItem className={classes.listItem} onClick={handleClose}>Profile</MenuItem>
                            <MenuItem className={classes.listItem} onClick={handleClose}>Inbox</MenuItem>
                            <MenuItem className={classes.listItem} onClick={handleClose}>Social</MenuItem>
                            <MenuItem className={classes.listItem} onClick={handleClose}>Settings</MenuItem>
                            <hr className='hr-dropdown' />

                            <NavLink to="/login" activeStyle={{                                  
                                    outline: 'none'
                                }} >                               
                                <MenuItem className={classes.listItem} onClick={handleClose}>Log Out</MenuItem>                               
                            </NavLink>
                        
                        </Menu>
                    </div>                                             
                </div>
            </div>
            
        </nav>
        
    )
}

export default Header