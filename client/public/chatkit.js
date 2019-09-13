<<<<<<< HEAD
/*import React from 'react'
=======
import React from 'react'
>>>>>>> a55c669158ede2fd9e3cadd0f53158e5619927a1
import Chatkit from '@pusher/chatkit'
import MessageList from './components/messageList'
import SendMessageForm from './components/sendmessageform'
import RoomList from './components/roomlist'
import NewRoomForm from './components/newroomform'

import { tokenUrl, instanceLocator } from './config'

class App extends React.Component {
    
    constructor() {
        super()
        this.state = {
            roomId: null,
            messages: [],
            joinableRooms: [],
            joinedRooms: []
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
        this.getRooms = this.getRooms.bind(this)
        this.createRoom = this.createRoom.bind(this)
    } 
    
    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'perborgen',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })
        
        chatManager.connect()
        .then(currentUser => {
            this.currentUser = currentUser
            this.getRooms()
        })
        .catch(err => console.log('error on connecting: ', err))
    }
    
    getRooms() {
        this.currentUser.getJoinableRooms()
        .then(joinableRooms => {
            this.setState({
                joinableRooms,
                joinedRooms: this.currentUser.rooms
            })
        })
        .catch(err => console.log('error on joinableRooms: ', err))
    }
    
    subscribeToRoom(roomId) {
        this.setState({ messages: [] })
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onNewMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
                
            }
        })
        .then(room => {
            this.setState({
                roomId: room.id
            })
            this.getRooms()
        })
        .catch(err => console.log('error on subscribing to room: ', err))
    }
    
    sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId: this.state.roomId
        })
    }
    
    createRoom(name) {
        this.currentUser.createRoom({
            name
        })
        .then(room => {
            this.subscribeToRoom(room.id)
        })
        .catch(err => console.log('error with createRoom: ', err))
    }
    
    render() {
        return (
            <div className="app">
                <RoomList
                    subscribeToRoom={this.subscribeToRoom}
                    rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
                    roomId={this.state.roomId} />
                <MessageList 
                    roomId={this.state.roomId}
                    messages={this.state.messages} />
                <SendMessageForm
                    disabled={!this.state.roomId}
                    sendMessage={this.sendMessage} />
                <NewRoomForm createRoom={this.createRoom} />
            </div>
        );
    }
}

<<<<<<< HEAD
export default App*/
=======
export default App
>>>>>>> a55c669158ede2fd9e3cadd0f53158e5619927a1
