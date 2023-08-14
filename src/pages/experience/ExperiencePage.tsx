import React from "react";

import Container from "./Experience.style";
import background from "./images/mountains.jpg";

const AboutPage: React.FC = () => {
  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${background})`,
      }}
    ></Container>
  );
};

export default AboutPage;
