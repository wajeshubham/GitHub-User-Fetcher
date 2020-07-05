import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import firebase from "firebase/app";
import firebaseConfig from "./config/FirebaseConfig";
import "firebase/auth";

import Home from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import PageNotFound from "./pages/PageNotFound";
import UserContext from "./context/UserContext";
import Footer from "./layout/footer";
import MyNavbar from "./layout/navbar";

// init firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
