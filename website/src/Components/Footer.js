import React from "react";
import { ReactComponent as CopyrightIcon } from '../Svg/Copyright.svg';
import { ReactComponent as CallIcon } from '../Svg/Call.svg';
import { ReactComponent as AtSignIcon } from '../Svg/AtSign.svg';
import { ReactComponent as LinkedinIcon } from '../Svg/LinkedIn.svg';
import { ReactComponent as InstagramIcon } from '../Svg/Instagram.svg';

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="wud-button-container">
      <button className="wud-button">WUD!</button>
    </div>
    <div className="footer-content">
      <div className="contact-info">
        <p><CallIcon /> 000 1234 789</p>
        <p><AtSignIcon /> hello@wud.events</p>
      </div>
      <div className="social-media">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
      </div>
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-conditions">Terms & Conditions</a>
      </div>
    </div>
    <div className="footer-bottom">
      <CopyrightIcon />
      <p>2024 WUD!</p>
    </div>
  </footer>
  
  
  );
};

export default Footer;
