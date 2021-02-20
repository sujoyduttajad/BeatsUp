import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

 const Header = () => {
    return (
        <div className="header__navbar">
           
                <FontAwesomeIcon size="2x" icon={faMusic} />  
                <h1 className="header__h1"> Beats Up!</h1>
           
        </div>
    )
}

export default Header