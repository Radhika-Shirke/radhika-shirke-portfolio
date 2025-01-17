import React from 'react';
import './navbar.css'; // Import CSS file for styling
import homeIcon from '../../assets/images/home.png'; // Import icons
import aboutIcon from '../../assets/images/about.png';
import projectIcon from '../../assets/images/project.png';
import skillsIcon from '../../assets/images/skills.png';
import contactIcon from '../../assets/images/contact.png';
import resumeIcon from '../../assets/images/resume.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#home">
            <img src={homeIcon} alt="Home" className="navbar-icon" />
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="#about">
            <img src={aboutIcon} alt="About" className="navbar-icon" />
            About
          </a>
        </li>
        <li className="navbar-item">
          <a href="#projects">
            <img src={projectIcon} alt="Projects" className="navbar-icon" />
            Projects
          </a>
        </li>
        <li className="navbar-item">
          <a href="#skills">
            <img src={skillsIcon} alt="Skills" className="navbar-icon" />
            Skills
          </a>
        </li>
        <li className="navbar-item">
          <a href="#contact">
            <img src={contactIcon} alt="Contact" className="navbar-icon" />
            Contact
          </a>
        </li>
        <li className="navbar-item">
          <a href="#resume">
            <img src={resumeIcon} alt="Resume" className="navbar-icon" />
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;