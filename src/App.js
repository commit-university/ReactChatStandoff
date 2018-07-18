import React from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'

import { tokenUrl, instanceLocator, userName } from './config'

import style from './style.css'

class App extends React.Component {
    
    constructor() {
        super()
    } 
    
    componentDidMount() {
        
    }
    
    getRooms() {
        
    }
    
    subscribeToRoom() {

    }
    
    sendMessage(text) {

    }
    

    /* Lifecycle */

    render() {
        return (
            <div className="welcome-text">
                <h1>Hi The Bad... Load your gun Cowboy!</h1>
                <p>You must:</p>
                <ol>
                    <li>Build your app with snippet in bullets.txt</li>
                    <li>Run your app and fix it!</li>
                    <li>Enter the #Saloon room</li>
                    <li>Use your Passphrase as fast as possible to shoot any message in the #Saloon room, gain access to the band of #ElPasoBank and some points!</li>
                    <li>Enter the #ElPasoBank using your new band name</li>
                    <li>Shoot any message in the #ElPasoBank and gain points!</li>
                </ol>

                <h2>Good Luck cowboy!</h2>
            </div>
        );
    }
}

export default App
