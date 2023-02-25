import React from "react";
import Container from "./Header.style";

const Header: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>Projects</li>
        <li>Work Experience</li>
        <li>Contact</li>
      </ul>
    </Container>
  );
};

export default Header;
