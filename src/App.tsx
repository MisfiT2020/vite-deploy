import React from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';
import linkedinIcon from './assets/linkedin.png';
import githubIcon from './assets/github.png';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="header">
        <a href="https://linkedin.com/in/srikousik" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com/MisfiT2020" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>
      </header>
      <h1>I'm Kousik</h1>
      <div className="animated-text">
        <Typewriter
          options={{
            strings: ["FreeBie", "Developer", "Designer", "Telegram Bot Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default App;
