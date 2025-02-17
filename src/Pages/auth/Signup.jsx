import React from 'react'
import '../../Styles/Signup.css';
import { NavLink } from 'react-router';

const Signup = () => {
  return (
    <div className="signup">
    <div className="signup1">
      <div className="signup2">
        <h2>SignUp</h2>
        <h4>Create your account to get full access</h4>
      </div>
      <div className="signup3">
        <h1>FullName</h1>
        <input type="text" placeholder=" Enter Fullname" />
      </div>
      <div className="signup8">
        <h1>Email Address</h1>
        <input type="text" placeholder=" Enter Email Address" />
      </div>
      <div className="signup4">
        <h1>Password</h1>
        <input type="password" placeholder="Enter Password" />
      </div>
      <div className="signup5">
        <h1>Confirm Password</h1>
          <input type="password" placeholder='Confirm Password' />
        </div>
        <div className="signup7">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
      <div className="signup6">
        <NavLink to="/login">
          <p>
            Already have an account? <strong>Login</strong> here
          </p>
        </NavLink>
        <button type='submit'>Login</button>  
      </div>
  </div>
  )
}

export default Signup
