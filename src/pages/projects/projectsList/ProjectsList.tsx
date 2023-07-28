import React from "react";
import { Container } from "./ProjectsList.style";

import image from "../images/sportsquiz.png";

const ProjectsList: React.FC = () => {
  return (
    <Container>
      <div>
        <img
          alt=""
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="description">
          <h4>Sports Quiz</h4>
          <p>
            This is a sports quiz app, using ReactJS and Typescript. Questions
            have been fetched from an API. The project has been built and
            deployed using AWS on the command line, updating files in an AWS S3
            Bucket.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ProjectsList;
