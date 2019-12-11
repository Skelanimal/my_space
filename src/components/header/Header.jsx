import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => (
  <div className="header">
    <div className="options">
      <Link className="navigate" to="/">
        HOME
      </Link>
      <Link className="navigate" to="/about-me">
        ABOUT ME
      </Link>
      <Link className="navigate" to="/projects">
        PROJECTS
      </Link>
      <Link className="navigate" to="/resume">
        RESUME
      </Link>
      <Link className="navigate" to="/hobbies">
        HOBBIES
      </Link>
      <Link className="navigate" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
