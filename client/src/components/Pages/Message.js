import React from "react";
import axios from "axios";
import io from "socket.io-client";
import Navbar from "../Navbar/Navbar";
import "../Message/Message.css";
let socket = io(`http://localhost:3001`);
class Message extends React.Component {
  state = {
    msgContent: "",
    language: "",
    senderId: localStorage.getItem("_id"),
    reciverId: "",
    receiver: "",
    receiverEmail: ""
  };

  componentDidMount() {
    socket.on("chat", function(data) {
      console.log(data);
      let message = document.getElementById("output").innerHTML;
      message +=
        "<p><strong>" + data.sender + ": </strong>" + data.messageT + "</p>";
      document.getElementById("output").innerHTML = message;
    });
    this.getUserInfo();
  }

  getUserInfo = () => {
    axios.get("/user/" + localStorage._id).then(response => {
      console.log(response);
      this.setState({
        language: response.data.language
      });
    });
  };

  messageInfo = event => {
    console.log(event.target.value);
    console.log(event.target.id);
    this.setState({
      [event.target.id]: event.target.value
    });

    if (event.target.id === "receiverList") {
      this.getReceivers(event.target.value);
    }
  };

  inputMessage = () => {
    console.log(this.state);
    let data = this.state;
    axios.post("/send", data).then(response => {
      console.log("Sending");
      console.log(response);
      console.log(response.data);
      socket.emit("chat", {
        senderId: data.senderId,
        message: data.msgContent,
        handle: data.receiverEmail
      });
      this.setState({
        msgContent: ""
      });
    });
  };

  getReceivers = query => {
    //  Get a list of message receivers
    axios
      .post("/users", {
        query: query
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          receivers: response.data
        });
      });
  };

  languagePreferenceFormat = value => {
    let language;
    switch (value) {
      case "en":
        language = "English";
        break;
      case "es":
        language = "Spanish";
        break;
      case "it":
        language = "Italian";
        break;
      case "ru":
        language = "Russian";
        break;
      default:
        language = "English";
    }
    return language;
  };

  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <label htmlFor="msgContent">Message</label>
        <input
          type="text"
          id="msgContent"
          value={this.state.msgContent}
          onChange={event => this.messageInfo(event)}
        />

        <label htmlFor="language">Language</label>
        <input
          type="text"
          id="language"
          placeholder={
            "Default: " + this.languagePreferenceFormat(this.state.language)
          }
          onChange={event => this.messageInfo(event)}
        />

        <label htmlFor="receiver-search">Send to</label>
        <input
          id="receiverEmail"
          type="text"
          onChange={event => this.messageInfo(event)}
        />

        <button id="buttonMessage" onClick={() => this.inputMessage()}>
          Input Message
        </button>

        <div id="chat-window">
          <div id="output"></div>
          <div id="feedback"></div>
        </div>
      </div>
    );
  }
}

export default Message;
