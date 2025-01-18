import React, { useEffect } from 'react';
import './VideoShowcase.css';
import image from '../assets/images/skills-showcase-img/female-coder.png'; // Import the image
import spring from '../assets/images/skills-showcase-img/Spring.svg';
import java from '../assets/images/skills-showcase-img/Java.svg';
import javascript from '../assets/images/skills-showcase-img/JavaScript.svg';
import html from '../assets/images/skills-showcase-img/HTML5.svg';
import css from '../assets/images/skills-showcase-img/CSS3.svg';
import react from '../assets/images/skills-showcase-img/React.png';
import nodejs from '../assets/images/skills-showcase-img/Node.js.svg';
import typescript from '../assets/images/skills-showcase-img/TypeScript.svg';
import sql from '../assets/images/skills-showcase-img/PostgresSQL.svg';
import kubernetes from '../assets/images/skills-showcase-img/Kubernetes.svg';
import jenkins from '../assets/images/skills-showcase-img/Jenkins.svg';
import git from '../assets/images/skills-showcase-img/Git.svg';

const VideoShowcase = () => {
  useEffect(() => {
    const skillImages = document.querySelectorAll('.skill-image');
    skillImages.forEach((skill, index) => {
      setTimeout(() => {
        skill.classList.add('visible');
      }, index * 500); // Delay each skill pop-up by 500ms
    });

    // Delay the text animation until the image is fully shown
    setTimeout(() => {
      const animatedText = document.querySelector('.animated-text');
      animatedText.classList.add('visible');
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <div className="image-showcase">
      <img src={image} alt="Female Coder" className="background-image" />
      <div className="skills-grid">
      <img src={java} alt="Java" className="skill-image" />
      <img src={spring} alt="Spring" className="skill-image" />
        <img src={javascript} alt="JavaScript" className="skill-image" />
        <img src={html} alt="HTML" className="skill-image" />
        <img src={css} alt="CSS" className="skill-image" />
        <img src={react} alt="React" className="skill-image" />
        <img src={nodejs} alt="Node.js" className="skill-image" />
        <img src={typescript} alt="TypeScript" className="skill-image" />
        <img src={sql} alt="SQL" className="skill-image" />
        <img src={kubernetes} alt="Kubernetes" className="skill-image" />
        <img src={jenkins} alt="Jenkins" className="skill-image" />
        <img src={git} alt="Git" className="skill-image" />
      </div>
      <div className="animated-text">
        <h1>Hi, I'm Radhika</h1>
        <p>I have 2 years of experience in full stack development. Skilled in Java, JavaScript, and more.</p>
      </div>
    </div>
  );
};

export default VideoShowcase;
