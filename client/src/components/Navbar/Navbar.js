import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
// import LogoImg from "../components/Image/logoImg.png";
import LogoImg from "../../Image/logoImg.png";

function Navbar(props) {
  // let logoText = "";

  // if (props.page === "message") {
  //   logoText = (
  //     <a href={"/"}>
  //       <img className="circle" alt="logoImg" src={LogoImg} />
  //     </a>
  //   );
  // } else {
  //   logoText === "";
  // }

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
  let button2 = "";

  if (props.page === "message") {
    button2 = (
      <ul id="nav-mobile" className="sidenav">
        <li className="divider">
          <a href={"/"}>HOME</a>
        </li>
        <li className="divider">
          {" "}
          <a href={"/signout"}>SIGN OUT</a>
        </li>
      </ul>
    );
  } else {
    button2 = (
      <ul id="nav-mobile" className="sidenav">
        <li className="divider">
          <a href={"/"}>HOME</a>
        </li>
        <li className="divider">
          {" "}
          <a href={"/signin"}>SIGN IN</a>
        </li>
        <li className="divider">
          <a href={"/signup"}>SIGN UP</a>
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
        {/* {logoText} */}
        {button}

        {button2}
        <a
          // className="sidenavClass"
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
