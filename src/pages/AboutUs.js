import React from 'react'
import Lottie from 'react-lottie';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import walkMan from '../lotties/lf30_editor_rmlzmksb.json'
import circle from '../images/Ellipse7.svg'

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

    return (
        <div>
            <Header />
            <aside><Sidebar /></aside>
                <section className="about-container">
                    <div className="animation-container">
                        {/* <img src={circle} alt="circle" /> */}
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
                   </div>
                </section>
            
        </div>
    )
}

export default AboutUs
