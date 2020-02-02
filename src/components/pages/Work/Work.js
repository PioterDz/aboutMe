import React from 'react';

import { uuid } from 'uuidv4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import projects from '../../../data/projects';

const Work = () => {

    return projects.map(el => {
        return (
            <div className='single--project' key={uuid()}>
                <h4>{el.name}</h4>
                <h6>{el.desc}</h6>
                {el.link ? <p><a href={el.link}>Check it <FontAwesomeIcon icon='chevron-right' /></a></p> : ''}
                <p><a href={el.repo}>Look at repo <FontAwesomeIcon className='github--icon' icon={['fab', 'github']} /></a></p>
            </div>
        );
    })
    
}

export default Work;