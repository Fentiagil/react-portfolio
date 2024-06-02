import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Navbar.css';


function Navbar() {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className={activeLink === '/' ? 'active' : ''}>
          <Link to="/" onClick={() => handleLinkClick('/')}>About Me</Link>
        </li>
        <li className={activeLink === '/projects' ? 'active' : ''}>
          <Link to="/projects" onClick={() => handleLinkClick('/projects')}>Projects</Link>
        </li>
        <li className={activeLink === '/certificate' ? 'active' : ''}>
          <Link to="/certificate" onClick={() => handleLinkClick('/certificate')}>Certificate</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

