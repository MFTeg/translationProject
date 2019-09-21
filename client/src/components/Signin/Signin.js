import React from "react";
import axios from "axios";
import Navbar from "../Navbar/index";
// import {Link} from "react-router-dom";
// import Chat from '../components/Chat';

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
      localStorage.clear();
      localStorage.setItem("_id", response.data);
    });
  };

  render() {
    return (
      <div className="row">
      <Navbar/>
        <br />
        <br />
        <div className="col s12">
          <input
            placeholder="Enter Email"
            type="email"
            id="email"
            className="col s9"
            onChange={event => this.signInInfo(event)}
          />
          <input
            placeholder="Enter Password"
            type="password"
            id="password"
            className="col s9"
            onChange={event => this.signInInfo(event)}
          />
          <button
            //move button to bottom
            className="btn btn-primary"
            id="buttonSignIn"
            onClick={() => this.signIn(
              //Cant link to 3000/Chat becuase reroutes to 3001/Chat (not valid)
              //after onclick confirm email and pw then direct to Chat
            )}
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }
}

export default Signin;
