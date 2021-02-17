import React from 'react';

import { uuid } from 'uuidv4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import projects from '../../../data/projects';

const Work = () => {

    const handleMove = (e) => {
        console.log('lalala');
    }

    return (
        <div className='Work'>

            <div className='circle--center'></div>

            <div className='projectsCircle--first'>
                {projects[0].map((el, idx) => {
                    return (
                        <div className='single--preview' key={uuid()} onMouseOver={handleMove}>
                            <h2>{el.short}</h2>
                        </div>
                    );
                })}
            </div>

            <div className='projectsCircle--second'>
                {projects[1].map((el, idx) => {
                    return (
                        <div className='single--preview' key={uuid()}>
                            <h2>{el.short}</h2>
                        </div>
                    );
                })}
            </div>

            
            
            {/* {projects.map(el => {
                return (
                    <div className='single--project' key={uuid()}>
                        <h4>{el.name}</h4>
                        <h6>{el.desc}</h6>
                        {el.link ? <p><a href={el.link} target='blank'>Check it <FontAwesomeIcon icon='chevron-right' /></a></p> : ''}
                        <p><a href={el.repo} target='blank'>Look at repo <FontAwesomeIcon className='github--icon' icon={['fab', 'github']} /></a></p>
                    </div>
                );
            })} */}

        </div>
    );
    
}

export default Work;