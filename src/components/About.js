import React from 'react';
import '../assets/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-photo">
        <img src="./img/foto.jpg" alt="Your NAME" className="profile-photo" />
      </div>
      <div className="about-info">
        <h1>Fenti Agil Sakinah S.Kom</h1><br/>
        <p>I am a graduate of Informatics from UPN Veteran, East Java, with a GPA of 3.94 and a cum laude predicate. </p><br/>
        <p>Currently, I work as a Full Stack Programmer, where I have honed my skills in coding, problem-solving, and application development. During my studies, I joined several organizations and internships, which helped me gain practical experience and deepen my knowledge in IT.</p><br/>
        <p>I have a strong passion for building applications and working with data processing. I also enjoy collaborating on projects to create impactful solutions.</p><br/>
        <p>One of the notable projects I worked on is an online course application designed to facilitate students in independent study programs at PT. Otak Kanan. Additionally, I developed a blood donor application that helps people access real-time information about blood stock availability. These experiences have strengthened my technical and teamwork skills, which I continue to apply and develop in my current role.</p><br/>
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
