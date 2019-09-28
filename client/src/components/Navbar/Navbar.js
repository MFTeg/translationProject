import React from "react";
// import { link } from "react-router-dom";
import "../Navbar/Navbar.css";
// import LogoImg from "../components/Image/logoImg.png";
import LogoImg from "../../Image/logoImg.png";

function Navbar() {
  return (
    <nav className="navBarClass" id="navbar" role="navigation">
      <div className="nav-wrapper container">
        <a href={"/"}>
          <img className="circle" alt="logoImg" src={LogoImg} />
        </a>
        <a id="logo-container" href={"/"} className="brand-logo">
          Translation Station
        </a>
        <ul className="right hide-on-med-and-down">
          <li className="button">
            <a
              href={"/Signup"}
              id="download-button"
              className="btn-large waves-effect waves-light blue lighten-1"
            >
              Sign Up
            </a>
          </li>
          <li>
            <a
              href={"/Signin"}
              id="download-button"
              className="btn-large waves-effect waves-light blue lighten-1"
            >
              Sign In{" "}
            </a>{" "}
          </li>
          <li>
            <a
              href={"/Message"}
              id="download-button"
              className="btn-large waves-effect waves-light blue lighten-1"
            >
              Message
            </a>
          </li>
        </ul>

        <ul id="nav-mobile" className="sidenav">
          <li>
            <a href={"/"}>Navbar Link</a>
          </li>
        </ul>
        <a href={"/"} data-target="nav-mobile" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
