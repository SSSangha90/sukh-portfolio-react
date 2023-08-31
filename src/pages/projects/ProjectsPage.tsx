import React from "react";
import { Container } from "./ProjectsPage.style";
import background from "./images/whistler.jpg";
import ProjectsList from "./projectsList/ProjectsList";

const ProjectsPage: React.FC = () => {
  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <ProjectsList />
    </Container>
  );
};

export default ProjectsPage;
