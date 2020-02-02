import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Photo from '../../common/Photo/Photo';

const About = () => {
    return (
        <div className="About">
            <article className="about--text">
                <h2>Hi, my name is Piotr!</h2>
                <h4>Looking for great work, with great people in a great place</h4>
                <h6>Good would be also great enough. :)</h6>
                <p>
                    I was doing a lot of different stuff in my life. Trying to figure out my own way. Used to travel a lot.<br/>
                    For few years from now, i was thinking about coding, but because of lack of time, money and opportunities i constantly put this
                    dream for a further time. And then at the end of 2018 i decided to start almost yearly web development bootcamp.<br/>
                    Since beginning of 2019 getting deeper and deeper into that - starting from HTML and CSS, through
                    Sass, Bootstrap etc., and then JavaScript! My very first programming language. Then tons of knowledge coming from every direction:    
                    scopes, loops, npm packages, webpack, node.js... and another tons of frustration when something went wrong or didn't work.<br/>

                    The next step was React library. Firstly didn't understand and nearly hate it, it was really 'undefined' for me :). But after a while of practice
                    loved it for life. The best thing Facebook company had done in their history, imo!<br/>
                    Now I'm in the place a lot of beginners were before: have some knowledge, did some non-commercial projects, looking for job where
                    I can develop skills and took part in real dev-life.<br/>

                    So, if i'm so lucky and you are some sort of HR manager of IT company looking for Junior Developer - don't hesitate and contact me through
                    one of my socials.<br/>

                    Anyway, thanks that you're here for this short moment! :)

                </p>
                <div className="social--icons">
                    <a href='https://www.linkedin.com/in/pioterdz/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon className='linkedin--icon' icon={['fab', 'linkedin']} />
                    </a>
                    
                    <a href='https://github.com/PioterDz' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon className='github--icon' icon={['fab', 'github']} />
                    </a>

                    <a href='https://twitter.com/mlodiii' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon className='twitter--icon' icon={['fab', 'twitter']} />
                    </a>
                </div>
            </article>
            <Photo source="meOne.png" alt="that's me" classNb="me-png" />
        </div>
        
    );
}

export default About;