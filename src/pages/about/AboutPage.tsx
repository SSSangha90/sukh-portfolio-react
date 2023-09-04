import React from "react";
import { Container } from "./AboutPage.style";
import background from "./images/whistler.jpg";
import SkillsColumn from "./SkillsColumn";
import Blurb from "./Blurb";

const AboutPage: React.FC = () => {
  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <Blurb />
      <SkillsColumn />
    </Container>
  );
};

export default AboutPage;
