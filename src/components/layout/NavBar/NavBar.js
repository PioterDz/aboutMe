import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Menu from '../../features/Menu/Menu';

const NavBar = () => {
    
    return (
        <nav className='NavBar'>
            <FontAwesomeIcon icon="bars" className="burger" />
            <Menu />
        </nav>
    );

}

export default NavBar;