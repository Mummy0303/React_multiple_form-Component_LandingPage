import React from "react";

import { Link } from "react-router-dom"; 

function Login(loginData) {
  return (
    <div className="login-container">
      <input type="email" placeholder="Email Address" value={loginData.loginEmail} />
      <input type="password" placeholder="Password" value={loginData.loginPassword} />
      <Link to="/user-page"><button onClick={() => {
                console.log(loginData);
       }} className="signIn-button">
        Sign In
      </button></Link>
    </div>
  );
}

export default Login;
