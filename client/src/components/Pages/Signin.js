import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Signin/Signin.css";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Navbar/Navbar";
import LogoImg from "../../Image/logoImg.png";

class Signin extends React.Component {
  state = {
    email: "",
    password: ""
  };

  signInInfo = event => {
    console.log(event.target.value);
    console.log(event.target.id);
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  signIn = () => {
    console.log(this.state); //This .state Email, password and language
    let data = this.state;
    axios.post("/signin", data).then(response => {
      console.log(response.data);
      //  Returns the user id, which can then be stored in localStorage
      localStorage.clear();
      localStorage.setItem("_id", response.data);
    });
  };

  render() {
    return (
      <div className="row">
        {/* <Navbar /> */}
        <div className="col s12 m5" id="containerSmall">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">
              <img
                className="circle"
                id="imgLogoId"
                alt="imgLogo"
                src={LogoImg}
              />
              <div className="message">
                <h4>Sign In or Create an Account</h4>
              </div>
            </a>
          </div>
        </div>

        <div className="col s12 m7" id="containerBig">
          <div className="nav-wrapper container">
            <div className="logoBigContainer">
              <Link to="/">
                <img className="circle" src={LogoImg} alt="circleLogo" />
              </Link>
            </div>
            <div className="messageBigContainer">
              <Link to="/signin" id="bigContainerMessage" class="brand-logo">
                {" "}
                <h4>Sign In or Create an Account</h4>
              </Link>
            </div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
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
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
              id="buttonSignIn"
              onClick={() => this.signIn()}
            >
              Sign In
            </button>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Signin;
