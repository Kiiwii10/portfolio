import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="intro">
      <div className="intro-text">
        <h1>Daniel Alexander Moroz</h1>
        <p>
          Hi, I'm Daniel, currently a student at the Technion...
          <h3>About Me</h3>
          In the Technion, I'm following the Data Science curriculum...
          I'm passionate about data, technology, and innovation...
        </p>
      </div>
      <div className="intro-links">
        <a href="https://www.linkedin.com/in/daniel-alexander-moroz/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/Kiiwii10" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="mailto:D.lebed1099@gmail.com"><i className="fas fa-envelope"></i></a>
      </div>
    </header>
  );
}

export default Header;
