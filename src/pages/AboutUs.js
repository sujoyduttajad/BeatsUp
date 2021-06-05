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
                    {/* <p>ewBoxSize (svg renderer)
                    if passed it will override the viewBox set by default on the animation
                    </p> */}
                </div>
                 
                </section>
                <div>
                   
                </div>
            
        </div>
    )
}

export default AboutUs
