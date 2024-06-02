import React from 'react';
import '../assets/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-photo">
        <img src="./img/foto.jpg" alt="Your NAME" className="profile-photo" />
      </div>
      <div className="about-info">
        <h1>Fenti Agil Sakinah S.Kom</h1>
        <p>I am an undergraduate majoring in informatics at UPN Veteran, East Java. I am good at coding and problem solving. During college, I joined several organizations and internships. I spend most of my time deepening my knowledge in IT. Currently, I am interested in learning to build applications and data processing. I enjoy collaborating on projects.</p>
      </div>
      <div className="about-social">
        <a href="https://instagram.com/fentiagl/" target="_blank" rel="noopener noreferrer">
          <img src="./img/Instagram.png" alt="Instagram" className="social-icon" />
        </a>
        <a href="https://github.com/Fentiagil/" target="_blank" rel="noopener noreferrer">
          <img src="./img/github.jpeg" alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/fentiagil-sakinah-8276ab1b7/" target="_blank" rel="noopener noreferrer">
          <img src="./img/Linkedin.png" alt="LinkedIn" className="social-icon" />
        </a>
        <a href="mailto:fentiagil@gmail.com">
          <img src="./img/gmail.jpeg" alt="Email" className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default About;
