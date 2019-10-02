import React from "react";
import axios from "axios";
import io from "socket.io-client";
import Navbar from "../Navbar/Navbar";
import "../Message/Message.css";
import LogoImg from "../../Image/logoImg.png";

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

  signOut = () => {
    console.log("signout");
    localStorage.clear();
  };

  render() {
    return (
      <div>
        {localStorage.length === 0 ? (
          <div>
            Please Sign In <a href={"/"}>Here</a>
          </div>
        ) : (
          <div className="row">
            <div className="col s12 m3" id="containerSmallMsg">
              <div className="nav-wrapper container">
                <a href="/" className="brand-logo">
                  <img
                    className="circle"
                    id="imgLogoSmall"
                    alt="logoImg"
                    src={LogoImg}
                  />
                </a>
              </div>
              <div className="containerSmallMessage" id="howToUse">
                <h6> Cool Ways To Use JustTranslator </h6>
              </div>
            </div>

            <div className="col s12 m6" id="containerBigMsg">
              <div className="chatRoomNav">
                <Navbar page="message" signOut={this.signOut} />
              </div>
              <div>
                {/* <a id="logo-container" href={"/message"} className="brand-logo">
                  <h4>Chat Room</h4>
                </a> */}
              </div>
              <div className="nav-wrapper container">
                <a href={"/"} className="brand-logo">
                  <img
                    className="circle"
                    id="imgLogoBig"
                    alt="logoImg"
                    src={LogoImg}
                  />
                </a>{" "}
                <div className="chatRoomContainer">
                  {/* <div>
                    <a href={"/"}>
                      <img
                        className="circle"
                        id="imgLogoBig"
                        alt="logoImg"
                        src={LogoImg}
                      />
                    </a>
                  </div> */}

                  <div className="containerBigMessage"></div>

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
                      "Default: " +
                      this.languagePreferenceFormat(this.state.language)
                    }
                    onChange={event => this.messageInfo(event)}
                  />

                  <label htmlFor="receiver-search">Send to</label>
                  <input
                    id="receiverEmail"
                    type="text"
                    onChange={event => this.messageInfo(event)}
                  />

                  <button
                    id="buttonMessage"
                    onClick={() => this.inputMessage()}
                  >
                    Input Message
                  </button>

                  <div className="chat-window">
                    <div id="output"></div>
                    <div id="feedback"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m3" id="containerSmallMsgThree">
              this is container small
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Message;
