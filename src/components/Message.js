import React from 'react'

import { userName } from './../config'

function Message(props) {  
    return (
        <div className={`message ${props.username == userName ? 'my-message' : null}`.trim()}>
            <div className="message-username">{props.username}</div>
            <div className="message-text">{props.text}</div>
        </div>
    )
}

export default Message
