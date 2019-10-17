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
            id="btnSignout"
            className="btn-large waves-effect waves-light lighten-1"
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
            className="btn-large waves-effect waves-light lighten-1"
          >
            {" "}
            Sign Up
          </Link>
        </li>
        <li>
          <Link
            to="/Signin"
            id="download-button"
            className="btn-large waves-effect waves-light lighten-1"
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
          {/* <a href={"/Signout"}>SIGN OUT</a> */}
          <Link
            to="/"
            // id="btnSignout"
            // className="btn-large waves-effect waves-light lighten-1"
            onClick={() => props.signOut()}
          >
            {" "}
            Sign Out
          </Link>
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
          {/* <a href={"/Signin"}>SIGN IN</a> */}
          <Link
            to="/Signin"
            // id="download-button"
            // className="btn-large waves-effect waves-light lighten-1"
          >
            SIGN IN
          </Link>
        </li>
        <li className="divider">
          {/* <a href={"/Signup"}>SIGN UP</a> */}
          <Link
            to="/Signup"
            // id="download-button"
            // className="btn-large waves-effect waves-light lighten-1"
          >
            {" "}
            SIGN UP
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <nav className="navBarClass" id="navbar" role="navigation">
      <div className="nav-wrapper container" id="navWrapperContainer">
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
            menu
          </i>
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
