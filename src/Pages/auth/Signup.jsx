import React, { useState } from "react";
import "../../Styles/signup.css";
import { NavLink } from "react-router";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(name);

  const BASEURL = `https://capitalshop-3its.onrender.com`;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASEURL}/users/register`, {
        name,
        email,
        password,
      });
      console.log(res);
    } catch (error) {}
  };
  return (
    <div className="signup">
      <div className="signup1">
        <div className="signup2">
          <h2>SignUp</h2>
          <h4>Create your account to get full access</h4>
        </div>
        <div className="signup3">
          <h1>FullName</h1>
          <input
            type="text"
            placeholder=" Enter Fullname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="signup8">
          <h1>Email Address</h1>
          <input
            type="text"
            placeholder=" Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signup4">
          <h1>Password</h1>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="signup5">
          <h1>Confirm Password</h1>
          <input type="password" placeholder="Confirm Password" />
        </div>
        {/* <div className="signup7">
          <a href="#">Forgot Password?</a>
        </div> */}
        <div className="signup6">
          <NavLink to="/login">
            <p>
              Already have an account? <strong>Login</strong> here
            </p>
          </NavLink>
          <button type="submit " onClick={onSubmit}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
