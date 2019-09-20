import React from "react";
import axios from "axios";
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
        <br />
        <br />
        <div className="col s12">
          <input
            type="text"
            id="email"
            className="col s9"
            onChange={event => this.signInInfo(event)}
          />
          <input
            type="password"
            id="password"
            className="col s9"
            onChange={event => this.signInInfo(event)}
          />
          <button
            className="col s4"
            id="buttonSignIn"
            onClick={() => this.signIn()}
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }
}

export default Signin;
