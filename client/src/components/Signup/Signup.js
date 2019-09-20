import React from "react";
import axios from "axios";

class Signup extends React.Component {
  state = {
    fullName: "",
    email: "",
    password: "",
    language: "en"
  };

  signupInfo = event => {
    console.log(event.target.value);
    console.log(event.target.id);
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  signUp = () => {
    console.log(this.state); //This .state Email, password and language
    let data = this.state;
    axios.post("/data", data).then(response => {
      console.log(response.data);
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col s9">
          <br />
          <br />
          <input
            type="text"
            id="fullName"
            onChange={event => this.signupInfo(event)}
          />
          <input
            type="text"
            id="email"
            onChange={event => this.signupInfo(event)}
          />
          <input
            type="password"
            id="password"
            onChange={event => this.signupInfo(event)}
          />

          <div className="input-field col s12">
            <select id="language" onChange={event => this.signupInfo(event)}>
              <option value="en">English</option>
              <option value="es">Espanish</option>
              <option value="it">Italian</option>
              <option value="ru">Russian</option>
            </select>
          </div>
          <button id="buttonSignUp" onClick={() => this.signUp()}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default Signup;
