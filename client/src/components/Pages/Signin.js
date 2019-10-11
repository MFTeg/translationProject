import React from "react";
// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";
import "../Signin/Signin.css";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
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
      if (response.data.status === 200) {
        localStorage.clear();
        localStorage.setItem("_id", response.data.id);
        // window.location.href = "/message";
        this.props.history.push("/Message");
      }
      console.log(response.data.message);
      // document.getElementById("signInStatus").innerText = response.data.message;
      // alert("Incorrect email or password");
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
                id="imgLogoSmall"
                alt="logoImg"
                src={LogoImg}
              />
            </a>
          </div>
          <div className="containerSmallMessage">
            {/* <img className="chatImg1" alt="logoImg" src={chatImg} /> */}
            <h4>Sign In or Create An Account</h4>
          </div>
        </div>

        <div className="col s12 m7" id="containerBig">
          <div className="nav-wrapper container">
            <div>
              <a href={"/"}>
                <img
                  className="circle"
                  id="imgLogoBig"
                  alt="logoImg"
                  src={LogoImg}
                />
              </a>
            </div>

            <div className="containerBigMessage">
              <a id="logo-container" href={"/"} className="brand-logo">
                <h4>Sign In or Create An Account</h4>
              </a>
            </div>
            <div className="containerSignin">
              <label htmlFor="email">Email</label>
              <input
                className="validate"
                type="email"
                id="email"
                onChange={event => this.signInInfo(event)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={event => this.signInInfo(event)}
              />

              <p id="signInStatus"></p>
              <button
                id="buttonSignIn"
                className="btn waves-effect waves-light"
                // type="submit"
                name="action"
                onClick={() => this.signIn()}
              >
                Sign In
              </button>
              <a href={"/signup"} className="right" id="membercheckSignin">
                Create An Account!
              </a>
            </div>
          </div>

          <div className="divider">
            {" "}
            <a href={"/signup"} className="aDivider">
              {/* JustTranslation&reg; */}
            </a>
          </div>

          <div className="information">
            <button
              id="buttonSignup"
              className="btn waves-effect waves-light center"
              type="submit"
            >
              <a href={"/signup"} className="right">
                Join Now
              </a>
            </button>

            <p>
              Create Account JustTranslation &reg; and Connect to Friends and
              Loved Ones WithOut any Language Barier
              <br />
              <br />
              Here IS The Cool Way To Use Our App.
              <br />
              <br />
              First you go to the sign up page, and sign up, then you go to the
              sign in page and sign in! That will lead you to our chat window
              where you can connect with friends and families.
            </p>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Signin;
