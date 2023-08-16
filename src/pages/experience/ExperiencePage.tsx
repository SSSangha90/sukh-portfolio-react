import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./Experience.style";
import background from "./images/mountains.jpg";
import TimeLine from "./Timeline";
import { Column } from "../about/AboutPage.style";
import justit from "./images/justit.png";
import tata from "./images/tata.jpg";
import push from "./images/push.png";
import download from "./images/download.png";

const AboutPage: React.FC = () => {
  const downloadCV = () => {
    console.log("download CV");
  };

  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${background})`,
      }}
    >
      <Column>
        <img src={justit} alt="Just IT" />
        <img src={tata} alt="Tata Communications" />
        <img src={push} alt="Push Live" />
        <div className="cv-download">
          <Link to="/files/SukhveerSanghaCV.doc" target="_blank" download>
            Download CV
          </Link>
        </div>
      </Column>
      <TimeLine />
    </Container>
  );
};

export default AboutPage;
