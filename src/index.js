import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserContext, UserDataProvider } from "./Services/UserDataProvider";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="911731612364-j1vi1okll0ep5s7i2o7e395neketn48r.apps.googleusercontent.com">
  <React.StrictMode>
    
 
      <App />
    
  </React.StrictMode>
  </GoogleOAuthProvider>
);


