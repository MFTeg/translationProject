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

        {button}

        <ul id="nav-mobile" className="sidenav">
          <li className="divider">
            <li>
              <a className="sidenavClass" href={"/"}>
                Home
              </a>
            </li>
          </li>
          <li className="divider">
            <a className="sidenavClass" href={"/signin"}>
              Sign In
            </a>
          </li>

          <li className="divider">
            <a href={"/signup"}>Sign Up</a>
          </li>
        </ul>

        <a
          className="sidenavClass"
          href={"/"}
          data-target="nav-mobile"
          className="sidenav-trigger"
        >
          <i className="material-icons" id="sideNavMenu">
            &#xE5D2;
          </i>
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
