import React from 'react';


const Message = (props) => {

    const { text, nameOfClass, show } = props;

    return (
        <header className={`Message ${nameOfClass} ${show}`}>
            {text}
        </header>
    );
}

export default Message;