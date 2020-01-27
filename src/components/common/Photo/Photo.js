import React from 'react';

const Photo = (props) => {

    const { source, alt, classNb } = props;

    return (
        <div className="Photo">
            <img src={`./${source}`} alt={alt} className={`img-${classNb}`} />
        </div>
    );
}

export default Photo;