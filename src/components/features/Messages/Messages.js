import React from 'react';
import { uuid } from 'uuidv4';

import LoadSpinner from '../../common/Spinner/Spinner';
import Message from '../../common/Message/Message';
import msgContent from '../../../data/msgContent';
import Audio from '../../common/Audio/Audio';

class Messages extends React.Component {
    constructor() {
        super();
        this.state = {
            msgId: 0
        };
    }

    componentDidMount() {
        this.setInt = setInterval(this.msgInterval, 3000);
    }

    msgInterval = () => { 
        this.setState({ msgId: this.state.msgId + 1 });
        if(this.state.msgId >= msgContent.length + (msgContent.length - 1)) clearInterval(this.setInt);
    }

    render() {
        const { msgId } = this.state; 

        return (
            msgId === 0 || msgId % 2 === 0 ? <LoadSpinner /> :
            msgContent.map((elem, idx) => {
                return <div key={uuid()}>
                    <Message 
                        key={uuid()} 
                        text={elem} 
                        nameOfClass={`msg-${idx}`}
                        show={msgId === idx + (idx + 1) ? 'show' : ''}
                    />
                    <Audio key={uuid()} source="pop.wav" />
                </div>
                
            })
        );
    }
}

export default Messages;