import React from 'react'
import Lottie from 'react-lottie';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import walkMan from '../lotties/lf30_editor_rmlzmksb.json'
import contactUs from '../lotties/lf30_editor_xbdpgq8f.json'

import Profile from '../images/Profile-pic.JPG'
import ReactIcon from '../images/React.js.svg'
import ReduxIcon from '../images/Redux.svg'
import NextIcon from '../images/Next.js.svg'
import SassIcon from '../images/Sass2.svg'
import NodeIcon from '../images/Node.js.svg'
import FigmaIcon from '../images/Figma.svg'
import GithubIcon from '../images/Github.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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

    return (
        <div>
            <Header />
            <aside><Sidebar /></aside>
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
                        <div><p>151 New Park Ave, Hartford, CT 06106, United States</p></div>
                        <div><p>+1(203) 302-9545</p></div>
                        <div><p>contactus@inveritasoft.com</p></div>
                   </div>
                   <div className="">
                        <Lottie 
                            options={contactUsOptions}
                            height={820}
                            width={820}
                        />
                    </div>
                </section>
            
        </div>
    )
}

export default AboutUs
