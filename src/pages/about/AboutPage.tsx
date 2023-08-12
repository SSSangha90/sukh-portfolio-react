import React from "react";
import Container from "../../layout/header/Header.style";
import background from "./images/whistler.jpg";
import SkillsColumn from "./SkillsColumn";

const AboutPage: React.FC = () => {
  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${background})`,
      }}
    >
      <SkillsColumn />
    </Container>
  );
};

export default AboutPage;
