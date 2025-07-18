import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-container fadeIn">
      <div className="register-card">
        <h2 className="register-title">Create Your Account</h2>
        <form>
          <div className="input-group">
            <label className="input-label">Full Name</label>
            <input type="text" className="input-field" placeholder="Enter your full name" />
          </div>
          <div className="input-group">
            <label className="input-label">Email</label>
            <input type="email" className="input-field" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label className="input-label">Password</label>
            <input type="password" className="input-field" placeholder="Create a password" />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>

        <div className="social-login">
          <button className="social-btn google">Sign up with Google</button>
          <button className="social-btn apple">Sign up with Apple</button>
        </div>

        <p className="register-footer">
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
