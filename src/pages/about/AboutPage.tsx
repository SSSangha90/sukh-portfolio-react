import React from "react";
import Container from "../../layout/header/Header.style";
import Navigation from "../../layout/navigation/Navigation";
import background from "./images/whistler.jpg";

const AboutPage: React.FC = () => {
  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${background})`,
      }}
    >
      <Navigation />
    </Container>
  );
};

export default AboutPage;
