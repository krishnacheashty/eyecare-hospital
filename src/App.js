import React from "react";
 import {
   BrowserRouter as Router,
   Switch,
   Route,
   
 } from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider";

import Login from "./Pages/firebase/login/Login";
import SignUp from "./Pages/firebase/signUp/SignUp";
import Home from "./Pages/home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <Route path = "*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
