import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
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
    </footer>
  );
};

export default Footer;