<<<<<<< HEAD
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Signin from './components/Signin';
import Signup from './components/Signup';
import Navigation from './components/Navigation';
import Chat from '../src/components/Chat';
=======

import React from "react";
import Signup from "./Signup.js";
import Signin from "./Signin.js";
import Message from "./Message.js";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Message from "./Message";

// import SignIn from './Signin'
// import SignUp from './Signup'
function App() {
  return (

    <Router>
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/SignUp" component={Signup} />
        <Route exact path="/Signin" component={Signin} />
        <Route exact path="/Message" component={Message} />
      </div>
    </Router>
  );
}

export default App;
>>>>>>> dc428a6201c4985de60aa56bfb78adea4898ed5d

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/Signin" component={Signin}/>
             <Route path="/Signup" component={Signup}/>
             <Route path="/chat" component={Chat}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;