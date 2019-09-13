import React from "react";
// import Signup from "./Signup";
// import Signin from "./Signin";
import Chatkit from '../node_modules/@pusher/chatkit-client/dist/web/chatkit'
import MessageList from './components/messageList'
import SendMessageForm from './components/sendmessageform'
import RoomList from './components/roomlist'
import NewRoomForm from './components/newroomform'
import './App.css'

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
  //chatmanager connection userId is a static value right now for testing purposes
  componentDidMount() {
      const chatManager = new Chatkit.ChatManager({
          instanceLocator,
          userId: '01',
          tokenProvider: new Chatkit.TokenProvider({
              url: tokenUrl
          })
      })
      //sets current users connection, will need to be called for sign up or sign in
      chatManager.connect()
      .then(currentUser => {
          this.currentUser = currentUser
          this.getRooms()
      })
      .catch(err => console.log('error on connecting: ', err))
  }
  //displays current rooms that are joinable
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
  //method for subscribing current user to a room
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
  //method for sending message, might need to parse the text to translate from here
  sendMessage(text) {
      this.currentUser.sendMessage({
          text,
          roomId: this.state.roomId
      })
  }
  //method for creating a new chat room
  createRoom(name) {
      this.currentUser.createRoom({
          name
      })
      .then(room => {
          this.subscribeToRoom(room.id)
      })
      .catch(err => console.log('error with createRoom: ', err))
  };
 //changed sign in function to fit with my chatkit code. not sure if this is finished but i haven't messed with it yet. Edited it out for now since its unused and causes an error for me
  /*Signin() {
    return (
      <div>
        {/* <Signup /> }
        <Signin />
      </div>
    );
  } */
  
  
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



export default App;
