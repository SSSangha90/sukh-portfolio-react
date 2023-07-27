import React from "react";
import Navigation from "../navigation/Navigation";
import Container from "./Header.style";
import background from "./image/whistler.jpg";

const Header: React.FC = () => {
  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${background})`,
      }}
    >
      <div className="hero-text-box">
        <h1>Sukh Sangha</h1>
        <h1 className="web-dev">Web Developer</h1>
        <a className="btn btn-ghost js--scroll-to-projects" href="#">
          View Projects
        </a>
      </div>
      <Navigation />
    </Container>
  );
};

export default Header;