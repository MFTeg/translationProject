import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
// import LogoImg from "../components/Image/logoImg.png";
import LogoImg from "../../Image/logoImg.png";

function Navbar(props) {
  let button = "";
  if (props.page === "message") {
    button = (
      <ul className="right hide-on-med-and-down">
        <li className="button">
          <Link
            to="/"
            id=""
            className="btn-large waves-effect waves-light blue lighten-1"
            onClick={() => props.signOut()}
          >
            {" "}
            Sign Out
          </Link>
        </li>
      </ul>
    );
  } else {
    button = (
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
      </ul>
    );
  }

  return (
    <nav className="navBarClass" id="navbar" role="navigation">
      <div className="nav-wrapper container">
        <a href={"/"}>
          <img className="circle" alt="logoImg" src={LogoImg} />
        </a>
        <a id="logo-container" href={"/"} className="brand-logo">
          JustTranslator
        </a>
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
            <Link
              to="/Message"
              id="download-button"
              className="btn-large waves-effect waves-light blue lighten-1"
            >
              Message
            </Link>
          </li>

          <li className="divider">
            {" "}
            <a href={"/signup"}>Sign Up</a>
          </li>
        </ul>

        <a href={"/"} data-target="nav-mobile" className="sidenav-trigger">
          <i className="material-icons" id="sideNavMenu">
            {" "}
            &#xE5D2;
          </i>
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
