import React from "react";
import axios from "axios";
import "../Signin/Signin.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import io from "socket.io-client";
let socket = io.connect(`http://localhost:3001`);
// import LogoImg from "../../Image/logoImg.png";

class Signin extends React.Component {
  state = {
    email: "",
    password: ""
  };

  signInInfo = event => {
    // console.log(event.target.value);
    // console.log(event.target.id);
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  signIn = () => {
    console.log(this.state); //This .state Email, password and language
    let data = this.state;
   
    socket.emit("signIn", {
      userName: data.userName,
      password: data.password,
      language: data.language
    })
    
   
  
  
  };


  render() {
    return (
      <div className="row">
        <Navbar />
        <div className="col s12 m5 l3" id="containerSmall">
          <div className="nav-wrapper container">
            {/* <a href="/" className="brand-logo">
              <img className="circle" src={LogoImg} />
            </a> */}
          </div>
        </div>

        <div className="col s12 m7 l9" id="containerBig">
          <div className="nav-wrapper container">
            <div>


            <label htmlFor="userName">userName</label>
            <input
              type="text"
              id="userName"
              // className="col s9"
              onChange={event => this.signInInfo(event)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              // className="col s9"
              onChange={event => this.signInInfo(event)}
            />
    

                <div className="input-field col s12">
              <select id="language" onChange={event => this.signInInfo(event)}>
                <option value="en">Select your preffered Language</option>
                <option value="en">English</option>
                <option value="es">Espanish</option>
                <option value="it">Italian</option>
                <option value="ru">Russian</option>
              </select>
            </div>
    
         
    </div>
            <Link
              to="/Message"
              id="buttonSignIp"
              onClick={() => this.signIn()}
              className="btn-large waves-effect waves-light blue lighten-1"
            >
              Message
            </Link>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Signin;
