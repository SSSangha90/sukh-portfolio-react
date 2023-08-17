import React from "react";
import { Link } from "react-router-dom";

const NavLinks: React.FC = () => {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </>
  );
};

export default NavLinks;
