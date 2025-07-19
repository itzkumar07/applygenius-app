import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const user = JSON.parse(localStorage.getItem("user"));

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS.",
    link: "https://yourportfolio.com"
  },
  {
    id: 2,
    title: "Blog Platform",
    description: "A full-stack blog platform using MERN stack.",
    link: "https://yourblog.com"
  },
  {
    id: 3,
    title: "E-commerce App",
    description: "A modern e-commerce app with payment integration.",
    link: "https://yourecommerce.com"
  }
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">
          Welcome, {user?.fullName || "User"}!
        </h1>
        <Link to="/" className="logout-link">Logout</Link>
      </div>
      <p className="dashboard-text">Here is your personal portfolio:</p>
      <div className="portfolio-list">
        {projects.map((project) => (
          <div className="portfolio-card" key={project.id}>
            <h2 className="portfolio-title">{project.title}</h2>
            <p className="portfolio-desc">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
