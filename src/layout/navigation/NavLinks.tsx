import React from "react";
import { Link } from "react-router-dom";

const NavLinks: React.FC<{ mobileLinkClick?: () => void }> = ({
  mobileLinkClick,
}) => {
  return (
    <>
      <li onClick={mobileLinkClick}>
        <Link to="/">Home</Link>
      </li>
      <li onClick={mobileLinkClick}>
        <Link to="/about">About Me</Link>
      </li>
      <li onClick={mobileLinkClick}>
        <Link to="/projects">Projects</Link>
      </li>
    </>
  );
};

export default NavLinks;
