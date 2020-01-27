import React from 'react';
import { uuid } from 'uuidv4';

import LoadSpinner from '../../common/Spinner/Spinner';
import Message from '../../common/Message/Message';
import msgContent from '../../../data/msgContent';

class Messages extends React.Component {
    constructor() {
        super();
        this.state = {
            msgId: 1
        };
    }

    

    componentDidMount() {
        this.setInt = setInterval(this.msgInterval, 10000);
    }

    msgInterval = () => { 
        this.setState({ msgId: this.state.msgId + 1 });
        if(this.state.msgId > 3) clearInterval(this.setInt);
    }

    render() {
        const { msgId } = this.state; 
        console.log(msgId);

        if(msgId > 4) clearInterval(this.setInt);

        // if(!msgContent) {
        //     return <LoadSpinner />
        // } else {
            return (
                msgId % 2 !== 0 ? <LoadSpinner key={uuid()} /> :
                msgContent.map((elem, idx) => { 
                    return <Message 
                        key={uuid()} 
                        text={elem} 
                        nameOfClass={`msg-${idx}`}
                        show={msgId === idx + 2 ? 'show' : (msgId === idx - 1 ?  'prev' : '')}  
                    />;
                })
            );
        // } 
    }
}

export default Messages;