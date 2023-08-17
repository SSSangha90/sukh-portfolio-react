import React from "react";
import { Link } from "react-router-dom";

import { Navbar } from "./Navigation.style";

const Navigation: React.FC = () => {
  return (
    <Navbar>
      <div>
        <ul className="main-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </Navbar>
  );
};

export default Navigation;
