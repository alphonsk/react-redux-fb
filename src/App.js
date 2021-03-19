// import logo from './logo.svg';
// import './App.css'; 
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Error from './pages/error';
import Navbar from './components/Navbar'
// import Following from './pages/users/following'
import Home from './pages/home'
 
function App() { 


  return ( 
    <Router>
      <Navbar /> 
      <Switch>
      <Route exact path="/" component={Home} />  
        {/* <Route exact path="/" component={Users} />  
        <Route exact path="/following" component={Following} />  
        <Route path="/user/:id" component={User} />    */}
        <Route path="*" component={Error} />    
      </Switch>
    </Router>  
  );
}

export default App;
