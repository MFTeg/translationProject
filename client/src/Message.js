import React from "react";
import axios from "axios";

class Message extends React.Component {
  state = {
    msgContent: "",
    language: "",
    senderId: localStorage.getItem("_id"),
    reciverId: "5d758419210d5f2a7c6930d0",
    receiver: ""
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
      console.log(response.data);
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

  render() {
    return (
      <div>
        <br />
        <br />
        <label htmlFor="msgContent">Message</label>
        <input
          type="text"
          id="msgContent"
          onChange={event => this.messageInfo(event)}
        />

        <label htmlFor="language">Language</label>
        <input
          type="text"
          id="language"
          onChange={event => this.messageInfo(event)}
        />

        <label htmlFor="receiver-search">Send to</label>
        <input
          id="receiverList"
          type="search"
          onChange={event => this.messageInfo(event)}
        />

        <button id="buttonMessage" onClick={() => this.inputMessage()}>
          Input Message
        </button>
      </div>
    );
  }
}

export default Message;
