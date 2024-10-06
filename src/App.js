import "./assets/css/App.css";
import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chart from "./Components/Chart/Chart";
import Home from "./Pages/Home";
import Trade from "./Pages/Trade";
import OldTransactions from "./Pages/OldTransactions";
import OpenTrades from "./Pages/OpenTrades";
import Config from "./Pages/Config";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import {
  UserContext,
  UserDataProvider,
  useUserData,
} from "./Services/UserDataProvider";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  useEffect(() => {
  
  }, []);

  const firebaseConfig = {
    apiKey: "AIzaSyCcPW_2CU-lfts53hVgYKi7YmgIDAzK9S4",
    authDomain: "tharseo-c8cb9.firebaseapp.com",
    projectId: "tharseo-c8cb9",
    storageBucket: "tharseo-c8cb9.appspot.com",
    messagingSenderId: "911731612364",
    appId: "1:911731612364:web:f59461e2e5b12cc6080069",
    measurementId: "G-HJDWVMTTD0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <UserDataProvider>
       <GoogleOAuthProvider clientId="911731612364-j1vi1okll0ep5s7i2o7e395neketn48r.apps.googleusercontent.com">
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/home"
              element={
                <Home
                     />
              }
            />
            <Route
              path="/trade"
              element={
                <Trade  />
              }
            />
            <Route
              path="/oldtransactions"
              element={
                <OldTransactions
                 
                />
              }
            />
            <Route
              path="/opentrades"
              element={
                <OpenTrades
                
                />
              }
            />
            <Route
              path="/config"
              element={
                <Config
               
                />
              }
            />
            <Route path="/chart" element={<Chart />} />
            <Route
              exact
              path="/"
              element={
                <Login
                 
                />
              }
            />
            <Route
              path="/register"
              element={<Register />}
            />
            {/* <Route path="/" element={""} /> */}
          </Routes>
        </div>
      </Router>
      </GoogleOAuthProvider>
    </UserDataProvider>
  );
}

export default App;
