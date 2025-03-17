import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const BASEURL = `https://capitalshop-3its.onrender.com`;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASEURL}/users/login`, {
        email,
        password,
      });
      console.log(res);
    } catch (error) {}
  };
  return (
    <div className="login">
      <div className="login1">
        <div className="login2">
          <h2>Login</h2>
          <h4>Enter Login details to get access</h4>
        </div>
        <div className="login3">
          <h1>Username or Email Address</h1>
          <input
            type="text"
            placeholder="Username/ Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login4">
          <h1>Password</h1>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
          <button onClick={()=>onSubmit()}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
