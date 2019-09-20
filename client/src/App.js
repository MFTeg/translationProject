import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Signin from './components/Signin';
import Signup from './components/Signup';
import Navigation from './components/Navigation';
import Chat from '../src/components/Chat';

 
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