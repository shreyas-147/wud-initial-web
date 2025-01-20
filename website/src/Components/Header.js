import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header">
      <div className="logo">
        <button className="logo-button">WUD!</button>
      </div>
      <div className="nav-container">
        <Link
          to="/"
          className={`nav-link ${activeLink === "home" ? "active" : ""}`}
          onClick={() => handleNavClick("home")}
        >
          Home
        </Link>
        <Link
          to="/wudapp"
          className={`nav-link ${activeLink === "wudapp" ? "active" : ""}`}
          onClick={() => handleNavClick("wudapp")}
        >
          WUD! App
        </Link>
        <Link
          to="/support"
          className={`nav-link ${activeLink === "support" ? "active" : ""}`}
          onClick={() => handleNavClick("support")}
        >
          Support
        </Link>
      </div>
    </header>
  );
};

export default Header;
