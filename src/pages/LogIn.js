import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import google from '../images/google-icon 2.svg'
import twitter from '../images/twitter-brands 1.svg'
import facebook from '../images/facebook-brands 1.svg'
import logo from "../images/beatsUp.svg";
import illustration from '../images/Group 10.svg'
import illu from '../images/listen.svg'


const LogIn = () => {


    return (
        <div className="login__container">
            <div className="login__box">
                <div className="login__side1">
                    <img src={logo} alt="logo" />
                    <div className="illustration__container">
                        <img src={illu} alt="Illustration" />
                    </div>
                </div>
                <div className="login__side2">
                    <h1>🎉Welcome Back</h1>
                    <p>Login with your email you entered during signup</p>
                    <form className="login__form">
                        <div>
                            <label>Username</label>                                                     
                            <input className="username" type='email' />                           
                        </div>
                        <div>
                            <label>Password</label>
                            <input className="password" type='password' />
                            <p>Forgot password?</p>
                        </div>

                        <div>
                            <button className="form__button">Log In</button>
                            <p className="signup__link">If you haven't registered, click here</p>
                        </div>
                    </form>

                    <div className='divider'> 
                        <hr/>
                        <p className="signup__hr">Or SignIn with</p>
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
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default LogIn


// stocklabs black shade - #010406