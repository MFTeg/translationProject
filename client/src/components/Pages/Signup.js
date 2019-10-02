import React from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../Signup/Signup.css";
import { Link } from "react-router-dom";
import io from "socket.io-client";
let socket = io.connect(`http://localhost:3001`);

// var cookief =socket.handshake.headers.cookie; 
  
// console.log(cookief);

class Signup extends React.Component {
  state = {
    fullName: "",
    userName: "",
    email: "",
    password: "",
    language: "en"
  };

  signupInfo = event => {
    // console.log(event.target.value);
    // console.log(event.target.id);
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  signUp = () => {
    // console.log(this.state); 
    //This .state Email, password and language
    let data = this.state;
    if((this.state.fullname !== " ")&& (this.state.userName !== " ")&&(this.state.email!== " ")&&(this.state.password !== " ")&&(this.state.language !== " ")){

    // axios.post("/signUp", data).then(response => {
    //   alert(response.data);
    // });
    socket.emit("SignUpData", {
     
      fullName: data.fullName,
      userName: data.userName,
      password: data.password,
      email: data.email,
      language: data.language,
      socketId: socket.id,

    })

  } else{
    alert("please fill out entire form")
  }
  } 

  render() {

    console.log('hello');
    
    return (
      <div>
        <div className="row">
          <Navbar />
        </div>

        <div className="row">
          <div className="col s9">
            <br />
            <br />
            <form>

           
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              onChange={event => this.signupInfo(event)}
            />
            <label htmlFor="">UserName</label>
            <input
              type="text"
              id="userName"
              onChange={event => this.signupInfo(event)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              onChange={event => this.signupInfo(event)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={event => this.signupInfo(event)}
            />

            <div className="input-field col s12">
              <select id="language" onChange={event => this.signupInfo(event)}>
                <option value="en">Select your preffered Language</option>
                <option value="en">English</option>
                <option value="es">Espanish</option>
                <option value="it">Italian</option>
                <option value="ru">Russian</option>
              </select>
            </div>
            </form>
            <Link
              to="/Signin"
              id="buttonSignUp"
              onClick={(event) => this.signUp(event)}
              className="btn-large waves-effect waves-light blue lighten-1"
            >
              Go to SignIn
            </Link>
          </div>

        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Signup;
