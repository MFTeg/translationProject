import React from "react";
import axios from "axios";
import "../Signin/Signin.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Navbar";
import { Link } from "react-router-dom";
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
    axios.post("/signin", data).then(response => {
      console.log(response.data);
      // axios.get("/data", data).then(response => {
      //   console.log(response.data);
      // });
      //  Returns the user id, which can then be stored in localStorage
      localStorage.clear();
      localStorage.setItem("_id", response.data);
    });
  
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


            <label htmlFor="bob">bob</label>
            <input
              type="text"
              id="bob"
              // className="col s9"
              onChange={event => this.signInInfo(event)}
            />

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
