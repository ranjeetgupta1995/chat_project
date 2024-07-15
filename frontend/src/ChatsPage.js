import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {

  return (
    <div style={{height: '100vh'}} >
        <PrettyChatWindow
      projectId="b0dfff1a-b41a-43a8-8317-cb1695737c80"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100vh' }}
    />
    </div>
  )
}

export default ChatsPage