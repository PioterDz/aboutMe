import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <ul className='Menu'>
            <li>
                <NavLink to="/">
                    <FontAwesomeIcon icon="home" className="home-icon" /> 
                </NavLink>
            </li>
            <li>
                <NavLink to="/about">Who am i?</NavLink>
            </li>
            <li>
                <NavLink to="/work">What i did?</NavLink>
            </li>
        </ul>
    )
}

export default Menu;