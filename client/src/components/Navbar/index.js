import React from "react";
import { link } from "react-router-dom";
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
        <a id="logo-container" href="#" class="brand-logo">
          Logo
        </a>
        <ul class="right hide-on-med-and-down">
          <li>
            <a href="#">WorldTime</a>
          </li>
          <li>
            <a
              href="#"
              id="download-button"
              class="btn-large waves-effect waves-light blue lighten-1"
            >
              {/* Sign In{" "}
            </a>{" "}
          </li>
          <li>
            <a
              href="#"
              id="download-button"
              class="btn-large waves-effect waves-light blue lighten-1"
            > */}
              Sign Up
            </a>
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
