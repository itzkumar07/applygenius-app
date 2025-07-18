import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container fadeIn">
      <div className="login-card">
        <h2 className="login-title">Login to Your Account</h2>
        <form>
          <div className="input-group">
            <label className="input-label">Email</label>
            <input type="email" className="input-field" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label className="input-label">Password</label>
            <input type="password" className="input-field" placeholder="Enter your password" />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="social-login">
          <button className="social-btn google">Continue with Google</button>
          <button className="social-btn apple">Continue with Apple</button>
        </div>

        <p className="login-footer">
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
