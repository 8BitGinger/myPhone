import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdMail } from 'react-icons/io';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { fadeIn } from '../util/variants';
import headshot from '../assets/images/profHeadshot.jpg';

import '../assets/styles/dev.css';

const Dev = () => {
  return (
    <motion.div
      className="dev-container"
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="dev-card">
        <img src={headshot} alt="headshot developer" />
        <h2>
          My name is{' '}
          <Link to="https://ryanfann.netlify.app/" className="dev-name">
            Ryan Fann
          </Link>{' '}
          a Full Stack Web Developer
        </h2>

        <div className="work">
          <Link to="https://ryanfann.netlify.app/" target="blank">
            <h2>View full Portfolio</h2>
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
    </motion.div>
  );
};

export default Dev;
