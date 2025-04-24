import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import framer-motion

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slight downward position
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move to normal position
      viewport={{ once: true }} // Animate only once when it comes into view
      transition={{ duration: 0.6 }} // Transition duration
    >
      <div className="footer-content">
        <p>© 2024 Cryptico. All rights reserved.</p>
        <div className="footer-icons">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
