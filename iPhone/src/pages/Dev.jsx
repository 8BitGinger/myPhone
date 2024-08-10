import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdMail } from 'react-icons/io';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

import '../assets/styles/dev.css';

const Dev = () => {
  return (
    <div className="dev-container">
      <div className="dev-card">
        <h2>
          My name is{' '}
          <Link to="https://ryanfann.netlify.app/" className="dev-name">
            Ryan Fann
          </Link>{' '}
          a Full Stack Web Developer
        </h2>
        <h3>My core skills include:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>SQL</li>
          <li>MongoDB</li>
        </ul>
        <div className="work">
          <Link to="https://ryanfann.netlify.app/" target="blank">
            <h2>View my Portfolio</h2>
          </Link>
        </div>
        <div className="contact">
          <h2>Contact Me</h2>
          <a href="mailto:ryan.fann@gmail.com">
            <IoMdMail />
          </a>
          <Link to="https://www.linkedin.com/in/ryanfanntastic/" target="blank">
            <FaLinkedin />
          </Link>
          <Link to="https://www.github.com/8BitGinger" target="blank">
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dev;
