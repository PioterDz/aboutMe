import React from 'react';

const Audio = (props) => {

    const { source } = props;

    return (
        <audio src={`./${source}`} autoPlay>
            Your browser does not support the <code>audio</code> element.
        </audio>
    );
}

export default Audio;