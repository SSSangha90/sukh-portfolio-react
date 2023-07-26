import React from "react";
import { Navbar } from "./Navigation.style";

const Navigation: React.FC = () => {
  return (
    <Navbar className="crossfade">
      <div className="row">
        <ul className="main-nav">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </Navbar>
  );
};

export default Navigation;
