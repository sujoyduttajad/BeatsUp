import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faHeadphonesAlt, faMusic } from '@fortawesome/free-solid-svg-icons';

 const Header = () => {
    return (
        <nav>
            <div className="header__navbar">      
                <FontAwesomeIcon size="3x" icon={faHeadphonesAlt} />  
                <h1 className="header__h1"> beats Up!</h1>
            </div>
        </nav>
        
    )
}

export default Header