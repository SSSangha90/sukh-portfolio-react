import React from "react";
import Container from "../../layout/header/Header.style";
import Navigation from "../../layout/navigation/Navigation";
import background from "./images/vatican.jpg";
import ProjectsList from "./projectsList/ProjectsList";

const ProjectsPage: React.FC = () => {
  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${background})`,
      }}
    >
      <Navigation />
      <ProjectsList />
    </Container>
  );
};

export default ProjectsPage;
