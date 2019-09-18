import React from "react";
import axios from "axios";

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
      <div>
        <br />
        <br />
        <input
          type="text"
          id="email"
          onChange={event => this.signInInfo(event)}
        />
        <input
          type="password"
          id="password"
          onChange={event => this.signInInfo(event)}
        />
        <button id="buttonSignIn" onClick={() => this.signIn()}>
          Sign In
        </button>
      </div>
    );
  }
}

export default Signin;
