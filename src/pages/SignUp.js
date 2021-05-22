import React from 'react'
import logo from "../images/BrandName.svg";
import Lottie from 'react-lottie';
import animationIllustr from '../lotties/lf30_editor_cstrm7zg.json'
import logoAnime from '../lotties/animation_koh3fmq3.json'
import { Link, NavLink } from "react-router-dom";
import {Checkbox, FormGroup, FormControlLabel} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      color: '#181A19',
      '&:before': {
        color: '#181A19'
      }
    },
})

const SignUp = () => {

    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationIllustr,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const logoOptions = {
        loop: false,
        autoplay: true,
        animationData: logoAnime,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
    }
    };

    return (
        <div className="signup__container">
            <div className="signup__box">            
                <div className="signup__side1">
                    <h1>Alrighty! <span>Let's get started</span></h1>
                    <form className="signup__form">
                        <div className="signup__input">
                            <label>Firstname</label>                                                     
                            <input className="username" type='text' />                           
                        </div>
                        <div className="signup__input">
                            <label>Lastname</label>                                                     
                            <input className="username" type='text' />                           
                        </div>
                        <div className="signup__input">
                            <label>Email</label>                                                     
                            <input className="username" type='email' />                           
                        </div>
                        <div className="signup__input">
                            <label>Password</label>
                            <input className="password" type='password' />
                        </div>
                        <div className="checkbox">
                            <Checkbox
                                color="default"
                                className={classes.root}
                            />
                            <p>I agree to all the <a href="#">Terms</a> , <a href="#">Privacy Policy</a> and <a href="#">Fees</a></p>
                        </div>
                        <div>
                            <NavLink to="/login" activeStyle={{                                  
                                    outline: 'none'
                                }} > 
                                <button className="form__button">Sign Up</button>
                            </NavLink>  
                            <p className="signup__link">Already have an account, 
                                <NavLink to="/login" activeStyle={{                                  
                                        outline: 'none'
                                    }} > <span>Log In</span>
                                </NavLink>    
                            </p>
                        </div>
                    </form>

                    {/* <div className='divider'> 
                        <hr/>
                        <p className="signup__hr">Or SignUp with</p>
                        <hr/>
                    </div>  

                    <div>
                        <button className="social-media">
                            <img src={facebook} alt="Facebbok" />
                        </button>
                        <button className="social-media">
                            <img src={twitter} alt="Twitter" />
                        </button>
                        <button className="social-media">
                            <img src={google} alt="Google" />
                        </button>
                    </div>   */}
                </div>
                <div className="signup__side2">
                    <div className="signup__logo__container">
                        <Lottie 
                            options={logoOptions}
                            height={100}
                            width={100}
                        />
                        <img src={logo} alt="logo" />
                    </div>    
                    <div className="illustration__container">
                        <Lottie 
                            options={defaultOptions}
                            height={420}
                            width={560}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp

