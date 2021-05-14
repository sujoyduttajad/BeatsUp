import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import google from '../images/google-icon 2.svg'
import twitter from '../images/twitter-brands 1.svg'
import facebook from '../images/Facebook Light.svg'
import logo from "../images/logoName.svg";
import illustration from '../images/listen.svg'
import Lottie from 'react-lottie';
import animationIllustr from '../lotties/animation_koh2csqy.json'
import logoAnime from '../lotties/animation_koh3fmq3.json'
import { Link, NavLink } from "react-router-dom";

const SignUp = () => {

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
        <div className="login__container">
            <div className="login__box">
                <div className="login__side2">
                    {/* <img src={logo} alt="logo" /> */}
                    <div className="logo__container">
                        <Lottie 
                            options={logoOptions}
                            height={100}
                            width={100}
                        />
                        <img src={logo} alt="logo" />
                    </div>    
                    <div className="illustration__container">
                        {/* <img src={illustration} alt="Illustration" /> */}
                        <Lottie 
                            options={defaultOptions}
                            height={400}
                            width={500}
                        />
                    </div>
                </div>
                <div className="login__side1">
                    {/* <h1>🎉Welcome Back</h1>
                    <p>Login with your email you entered during signup</p> */}
                    <form className="login__form">
                        <div>
                            <label>Firstname</label>                                                     
                            <input className="username" type='text' />                           
                        </div>
                        <div>
                            <label>Lastname</label>                                                     
                            <input className="username" type='text' />                           
                        </div>
                        <div>
                            <label>Email</label>                                                     
                            <input className="username" type='email' />                           
                        </div>
                        <div>
                            <label>Password</label>
                            <input className="password" type='password' />
                            <p><a href="#"> Forgot password?</a></p>
                        </div>

                        <div>
                            <NavLink to="/" activeStyle={{                                  
                                    outline: 'none'
                                }} > 
                                <button className="form__button">Sign Up</button>
                            </NavLink>  
                            
                        </div>
                    </form>

                    <div className='divider'> 
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
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default SignUp

