import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const LogIn = () => {


    return (
        <div className="login__container">
            <div className="login__box">
                <div className="login__side1"></div>
                <div className="login__side2">
                    <h1>🎉Welcome Back</h1>
                    <p>Login with your email you entered during signup</p>
                    <form className="login__form">
                        <div>
                            <label>Username</label>
                            <fieldset className="field__email">   
                            {/* <FontAwesomeIcon 
                                
                                size="1x" 
                                icon={faEnvelope} 
                            />                       */}
                                <input className="username" type='email' />
                            </fieldset>
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
                </div>
            </div>
        </div>
    )
}

export default LogIn


// stocklabs black shade - #010406