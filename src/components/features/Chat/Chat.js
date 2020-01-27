import React from 'react';

import Messages from '../Messages/Messages';
import Photo from '../../common/Photo/Photo';

function Chat() {
  return (
    <div className="Chat">
      <Photo source='meSec.jpg' alt='it is me' classNb='01' />
      <Messages />
    </div>
  );
}

export default Chat;