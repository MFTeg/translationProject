import React, {Component} from "react";

// import Navbar from "../Navbar/Navbar";
// import Footer from "../Navbar/Navbar";  
// import { Link } from "react-router-dom";
     
import io from "socket.io-client";
import Axios from "axios";
let socket = io.connect(`http://localhost:3001`);

socket.on("connected", function(data) {
    console.log("We are connected")
    console.log(data);
})


class Message extends React.Component {
    
  
  
  constructor(){
    super()
    this.state = {
        message: "",
        userName: "",
        language: "",

      }
  }
      componentDidMount() {
        socket.on("chatlog", function(data) {
          console.log("We are connected")
          console.log(data);
          console.log(data.messageT[0])

        var output =  document.getElementById("output")
        output.innerHTML += "<p><strong>" + data.username + ":   </strong>" + data.message +"<br>" + data.messageT[0]
       
        });
  
      };
     
        
      ChatInfo = event => {
        // console.log(event.target.id)
      console.log("working")
        this.setState({
          [event.target.id]: event.target.value
        });
      }
     
   
     
      Chatbox = () => {
        console.log(this.state);
          socket.emit("chatroom", {
            message: this.state.message,
            username: this.state.userName,
            language: this.state.language
          });

      }

    render() {
        return (
            <div>
                <div id = "userList">
            <h2>Welcome To Our Chatroom</h2>
            
            </div> 
            <div id="chat-window">
                <div id="output"></div>
                <div id="feedback"></div>
            </div>
       

           
           <input id="userName" type="text" placeholder="userName"
             onChange={event => this.ChatInfo(event)}/> 

            <input id="message" type="text" placeholder="message"
             onChange={event => this.ChatInfo(event)}/> 

<div className="input-field col s12">
              <select id="language" onChange={event => this.ChatInfo(event)}>
                <option value="en">Select the language you would like to translate to</option>
                <option value="en">English</option>
                <option value="es">Espanish</option>
                <option value="it">Italian</option>
                <option value="ru">Russian</option>
              </select>
            </div>
           
            <button id="send"
                    onClick={() => this.Chatbox()}>
             Send</button>
            </div>
            );
        }

      }     

export default Message;


    