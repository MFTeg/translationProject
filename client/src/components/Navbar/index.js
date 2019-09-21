import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
// import LogoImg from "../components/Image/logoImg.png";
import LogoImg from "../../Image/logoImg.png";

function Navbar() {
  return (
    <nav className="blue" role="navigation">
      <div className="nav-wrapper container">
        <a href="#">
          <img className="circle" src={LogoImg} />
        </a>
        <div id="logo-container" class="brand-logo">
          Logo
        </div>
        <ul class="right hide-on-med-and-down">
          <li>
            <a href="#">WorldTime</a>
          </li>
          <li>
            <Link to="/Signin"
              id="download-button"
              class="btn-large waves-effect waves-light blue lighten-1">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/Signup"
              id="download-button"
              className="btn-large waves-effect waves-light blue lighten-1">
              Sign Up
            </Link>
          </li>
        </ul>

        <ul id="nav-mobile" class="sidenav">
          <li>
            <a href="#">Navbar Link</a>
          </li>
        </ul>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
