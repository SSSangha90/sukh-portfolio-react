import React from "react";
import { Link } from "react-router-dom";

import { Container, Social } from "./Header.style";
import background from "./image/whistler.jpg";
import github from "./image/github.png";
import linkedin from "./image/linkedin.png";

const Header: React.FC = () => {
  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero-text-box">
        <h1>Sukh Sangha</h1>
        <h1 className="web-dev">Web Developer</h1>
        <Social>
          <Link to="https://github.com/SSSangha90" target="_blank">
            <img src={github} alt="Github" />
          </Link>
          <Link to="https://www.linkedin.com/in/sukh-sangha/" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
          </Link>
        </Social>
        <Link className="btn btn-ghost js--scroll-to-projects" to="/projects">
          View Projects
        </Link>
      </div>
    </Container>
  );
};

export default Header;
