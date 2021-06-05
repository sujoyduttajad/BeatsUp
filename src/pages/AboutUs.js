import React from 'react'
import Lottie from 'react-lottie';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import walkMan from '../lotties/lf30_editor_rmlzmksb.json'


const AboutUs = () => {


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: walkMan,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <div>
            <Header />
            <aside><Sidebar /></aside>
            <div className="animation">
            <Lottie 
                options={defaultOptions}
                height={820}
                width={560}
            />
            </div>
            
        </div>
    )
}

export default AboutUs
