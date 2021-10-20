import React from "react";
 import {
   BrowserRouter as Router,
   Switch,
   Route,
   
 } from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider";
import Booking from "./Pages/Booking/Booking";

import Login from "./Pages/firebase/login/Login";
import SignUp from "./Pages/firebase/signUp/SignUp";
import Header from "./Pages/home/Header/Header";
import Hnav from "./Pages/home/Header/Hnav";
import MyBlog from "./Pages/home/Home/Blogs/MyBlog/MyBlog";
import Home from "./Pages/home/Home/Home";
import PrivateRoute from "./Pages/home/Privete/PrivateRoute";
import Services from "./Pages/home/services/Services";
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
            <PrivateRoute path='/services'>
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path='/blogs'>
              <MyBlog></MyBlog>
            </PrivateRoute>
            <Route path='/booking/:serviceId'>
              <Booking></Booking>
            </Route>
            <Route></Route>
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
