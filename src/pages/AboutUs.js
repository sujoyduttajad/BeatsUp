import React from 'react'
import Lottie from 'react-lottie';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import walkMan from '../lotties/lf30_editor_rmlzmksb.json'
import contactUs from '../lotties/lf30_editor_xbdpgq8f.json'
import logoAnime from '../lotties/animation_koh3fmq3.json'

import logo from "../images/BrandName.svg";
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter-brands 1.svg'
import facebook from '../images/Facebook Light.svg'
import Profile from '../images/Profile-pic.JPG'
import ReactIcon from '../images/React.js.svg'
import ReduxIcon from '../images/Redux.svg'
import NextIcon from '../images/Next.js.svg'
import SassIcon from '../images/Sass2.svg'
import NodeIcon from '../images/Node.js.svg'
import FigmaIcon from '../images/Figma.svg'
import GithubIcon from '../images/Github.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarked, faMapMarker, faPaperPlane, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: walkMan,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid meet",
          filterSize: {
            width: '100%',
            height: '90%',
            x: '-10%',
            y: '-6%',
          }
        }
      };

    const contactUsOptions = {
        loop: true,
        autoplay: true,
        animationData: contactUs,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
        
    }  

    const logoOptions = {
        loop: false,
        autoplay: true,
        animationData: logoAnime,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
    }
    };

    return (
        <div>
            <Header />
            <aside><Sidebar /></aside>
            {/* ###########      About-Us container    ############### */}
                <section className="about-container">
                    <div className="animation-container">
                        <Lottie 
                            className="man"
                            options={defaultOptions}
                            height={820}
                            width={560}
                        />
                    </div>
                <div className="about">
                    <h1>About Us</h1>
                    <p>Hi, I am Sujoy the creator of BeatsUp, a music app that plays chill music from any devices you want to play, it's a 
                        responsive web app for now but I'm planning to migrate it to a PWA app so that it could be downloadable in smratphones.
                    </p>

                    <p>    
                        This app plays cool music that anybody at anytime can enjoy and have a good time(chill out). 
                        I made this app to play my favourite songs continuously(repeat) without showing any adds or whatever.
                    </p>
                </div>
                </section>
        {/* ###########      Bio-data container    ############### */}
                <section className="bioData-container"> 
                    <div className="bioData-intro">
                        <h1>Hi,</h1> 
                        <h2>I am Sujoy Dutta</h2>
                        <p>Frontend Developer</p>
                        <p className="content">I have 3 years of experience in UI with a tech-stack of React.js, Next.js, Redux, Node, 
                            SASS, JavaScript, HTML5, CSS3, Bootstrap</p>
                        <p className="content">I am still learning UX design but much inclined towards UI design.
                            This app is all designed by me(super proud).</p>
                        <p className="content">I am a photographer and enjoy playing guitar in my free time, Spoiler huge Marvel fan.</p>    

                        <p>Skills</p>    
                        <div className="skills-container">
                            <img src={ReactIcon} alt="React Icon" />
                            <img src={ReduxIcon} alt="Redux Icon" />
                            <img src={NodeIcon} alt="Node Icon" />
                            <img src={SassIcon} alt="Sass Icon" />
                            <img src={NextIcon} alt="Next Icon" />
                            <img src={FigmaIcon} alt="Figma Icon" />
                            <img src={GithubIcon} alt="Github Icon" />
                        </div>
                   </div>
                   <div className="bioData-profile">
                       <img src={Profile} alt="profile-pic" />
                   </div>
                </section>
        {/* ###########      Contact-Us Form container    ############### */}
                <section className="contactus-container">
                    <div className="contactus-intro">
                        <h1>Get in Touch</h1> 
                        <p>Have any inquiry or feedback for us?
                        Contact us directly or fill out the form and we will get 
                         back to you promptly</p>
                        <form className="contactus__form">
                        <div className="contactus__input">
                            <label>Firstname</label>                                                     
                            <input className="contactus__username" type='text' placeholder="John" />                           
                        </div>
                        <div className="contactus__input">
                            <label>Lastname</label>                                                     
                            <input className="contactus__username" type='text' placeholder="Doe" />                           
                        </div>
                        <div className="contactus__input">
                            <label>Email</label>                                                     
                            <input className="contactus__username" type='email' placeholder="john.doe@example.com" />                           
                        </div>
                        <div className="contactus__input">
                            <label>Message</label>  
                            <textarea 
                                    className="textarea"
                                    placeholder="Type something if you want">
                            </textarea>
                        </div>
                        
                        <div>
                            <button className="contactus__button">
                                Send Message
                                <FontAwesomeIcon 
                                    className="send__icon" 
                                    size="1x" 
                                    icon={faPaperPlane} 
                                />
                            </button>     
                        </div>
                    </form>       
                   </div>
                   <div className='banner-strip'>
                        <div className="banner__logo__container">
                            <Lottie 
                                options={logoOptions}
                                height={60}
                                width={60}
                            />
                            <img src={logo} alt="logo" />
                        </div> 
                        <div className="contact-info-container">
                        <div className="contact-info">
                            <FontAwesomeIcon 
                                className="send__icon" 
                                size="1x" 
                                icon={faMapMarker} 
                            />
                            <p>151 New Park Ave, Hartford, CT 06106, United States</p>
                        </div>
                        <div className="contact-info">
                            <FontAwesomeIcon 
                                className="send__icon" 
                                size="1x" 
                                icon={faPhoneAlt} 
                            />
                            <p>+1(203) 302-9545</p>
                        </div>
                        <div className="contact-info">
                            <FontAwesomeIcon 
                                className="send__icon" 
                                size="1x" 
                                icon={faEnvelope} 
                            />
                            <p>contactus@inveritasoft.com</p>
                        </div>
                        </div>
                        <div className="contact-info-container">
                            <button className="contactus-social-media">
                                <img src={facebook} alt="Facebbok" />
                                <p>Join us on Facebook</p>
                            </button>
                            <button className="contactus-social-media">
                                <img src={twitter} alt="Twitter" />
                                <p>Join us on Twitter</p>
                            </button>
                            <button className="contactus-social-media">
                                <img src={instagram} alt="Instagram" />
                                <p>Join us on Instagram</p>
                            </button>
                            <button className="contactus-social-media-git">
                                <img src={GithubIcon} alt="Github Icon" />
                                <p>My Github account</p>
                            </button>
                        </div>
                        <div className="contactus-terms-conditions">
                            <p><a href="#">Terms of Service</a></p>
                            <p><a href="#">Privacy Policy</a></p>
                            <p><a href="#">Cookie Policy</a></p>
                            <p><a href="#">Ads info</a></p>
                            <p><a href="#">More</a></p>
                            <p><a href="#">© 2021 BeatsUp, Inc.</a></p>
                        </div>
                   </div>
                   {/* ############     Mail Animation     ############ */}
                   <div className="mail-animation">
                        <Lottie 
                            options={contactUsOptions}
                            height={720}
                            width={820}
                        />
                    </div>
                </section>
            
        </div>
    )
}

export default AboutUs
