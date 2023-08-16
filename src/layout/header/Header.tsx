import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../navigation/Navigation";
import { Container, Social } from "./Header.style";
import background from "./image/whistler.jpg";
import github from "./image/github.png";
import linkedin from "./image/linkedin.png";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const navigateToProjects = useCallback(
    () => navigate("/projects"),
    [navigate]
  );

  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${background})`,
      }}
    >
      <Navigation />
      <div className="hero-text-box">
        <h1>Sukh Sangha</h1>
        <h1 className="web-dev">Web Developer</h1>
        <Social>
          <a href="https://github.com/SSSangha90" target="_blank">
            <img src={github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/sukh-sangha/" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </Social>
        <a
          className="btn btn-ghost js--scroll-to-projects"
          onClick={navigateToProjects}
          href=""
        >
          View Projects
        </a>
      </div>
    </Container>
  );
};

export default Header;
