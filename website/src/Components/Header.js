import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleNavClick = (link) => {
    setActiveLink(link);
    // Add navigation logic here
  };

  return (
    <header className="header">
      <div className="logo">
        <button className="logo-button">WUD!</button>
      </div>
      <div className="nav-container">
        <button
          className={`nav-link ${activeLink === "home" ? "active" : ""}`}
          onClick={() => handleNavClick("home")}
        >
          Home
        </button>
        <button
          className={`nav-link ${activeLink === "wudapp" ? "active" : ""}`}
          onClick={() => handleNavClick("wudapp")}
        >
          WUD! App
        </button>
        <button
          className={`nav-link ${activeLink === "support" ? "active" : ""}`}
          onClick={() => handleNavClick("support")}
        >
          Support
        </button>
        </div>
    </header>
  );
};

export default Header;
