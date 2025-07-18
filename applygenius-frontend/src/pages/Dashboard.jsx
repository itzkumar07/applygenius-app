import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1 className="dashboard-title">Welcome to Your Dashboard</h1>
        <p className="dashboard-text">You have successfully logged in.</p>
        <Link to="/" className="logout-link">Logout</Link>
      </div>
    </div>
  );
};

export default Dashboard;
