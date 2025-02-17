import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/Login.css"; 

const Login = () => {
  return (
    <div className="login">
      <div className="login1">
        <div className="login2">
          <h2>Login</h2>
          <h4>Enter Login details to get access</h4>
        </div>
        <div className="login3">
          <h1>Username or Email Address</h1>
          <input type="text" placeholder="Username/ Email Address" />
        </div>
        <div className="login4">
          <h1>Password</h1>
          <input type="password" placeholder="Enter Password" />
        </div>
        <div className="login5">
          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Keep me logged in</label>
          </div>
          <div className="login7">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
        <div className="login6">
          <NavLink to="/Signup">
            <h5>
              Don't have an account? <strong>Sign up</strong> here
            </h5>
          </NavLink>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
