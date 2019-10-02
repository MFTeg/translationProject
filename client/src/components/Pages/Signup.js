import React from "react";
import axios from "axios";

// import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../Signup/Signup.css";
import LogoImg from "../../Image/logoImg.png";

class Signup extends React.Component {
  state = {
    fullName: "",
    email: "",
    password: "",
    language: "en"
  };

  signupInfo = event => {
    console.log(event.target.value);
    console.log(event.target.id);
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  signUp = () => {
    console.log(this.state); //This .state Email, password and language
    let data = this.state;
    axios.post("/data", data).then(response => {
      console.log(response.data);
    });
  };

  // <div className="col s12 m7" id="containerBig">
  //         <div className="nav-wrapper container">
  //           <div>
  //             <a href={"/"}>
  //               <img
  //                 className="circle"
  //                 id="imgLogoBig"
  //                 alt="logoImg"
  //                 src={LogoImg}
  //               />
  //             </a>
  //           </div>

  //           <div className="containerBigMessage"></div>
  render() {
    return (
      <div className="row">
        <div className="col s12 m5" id="containerSmall">
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
          <div className="containerSmallMessage">
            <h4>Create An Account</h4>
          </div>
        </div>

        <div className="col s12 m7" id="containerBig">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">
              <img
                className="circle"
                id="imgLogoBig"
                alt="logoImg"
                src={LogoImg}
              />
            </a>
          </div>
          <div className="containerBigMessage">
            <h4>Create An Account</h4>
          </div>
          <div className="row" id="formContainer">
            <div className="col s9">
              <p>PERSONAL INFORMATION</p>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                onChange={event => this.signupInfo(event)}
              />
              <br />
              <p>ACCOUNT SECURITY</p>
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
              <br />
              <p>LANGUAGE PREFERENCE</p>
              <label htmlFor="password">Language</label>

              <div className="input-field col s12">
                <select
                  id="language"
                  onChange={event => this.signupInfo(event)}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="it">Italian</option>
                  <option value="ru">Russian</option>
                </select>
              </div>

              <button
                id="button-SignUp"
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
                onClick={event => this.signUp(event)}
              >
                Sign Up
              </button>
              <a href={"/signin"} className="right">
                Already A Member!
              </a>
            </div>
          </div>
          <div><Footer /></div>
        </div>
      </div>
    );
  }
}

export default Signup;
