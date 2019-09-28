import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
// import LogoImg from "../components/Image/logoImg.png";
import LogoImg from "../../Image/logoImg.png";



function Navbar() {
  return (
    <nav id="navbar" role="navigation">
      <div className="nav-wrapper container">
        <Link to="/">
          <img className="circle" src={LogoImg} alt="circleLogo" />
        </Link>

        <Link to="/" id="logo-container" className="brand-logo">
          {" "}
          Translation Station
        </Link>

        <ul className="right hide-on-med-and-down">
          <li className="button">
            <Link
              to="/Signup"
              id="download-button"
              className="btn-large waves-effect waves-light blue lighten-1"
            >
              {" "}
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              to="/Signin"
              id="download-button"
              className="btn-large waves-effect waves-light blue lighten-1"
            >
              Sign In
            </Link>
          </li>
          <li>
            {/* <Link
              to="/Message"
              id="download-button"
              className="btn-large waves-effect waves-light blue lighten-1"
            >
              Message
            </Link> */}
          </li>
        </ul>
        <a href="chatroom.html">Redirect to Html page</a>
        <ul id="nav-mobile" className="sidenav">
          <li>
            <Link to="/">Navbar Link</Link>
          </li>
        </ul>
        <Link to="/" data-target="nav-mobile" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
