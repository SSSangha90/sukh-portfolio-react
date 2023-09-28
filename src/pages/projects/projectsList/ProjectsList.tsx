import React from "react";

import { Container } from "./ProjectsList.style";
import ProjectContainer from "../components/ProjectBox";

// images
import sports from "../images/sportsquiz.png";
import sunnys from "../images/sunnys.png";
import budgetapp from "../images/budgetapp.png";
import artwork from "../images/artwork.png";

const ProjectsList: React.FC = () => {
  return (
    <Container>
      <ProjectContainer
        image={sports}
        title="Sports Quiz"
        description="Sports quiz app, using ReactJS and Typescript. Questions have been
        fetched from an API. The project has been built and deployed using
        AWS to an AWS S3 Bucket."
        site="http://sports-react-quiz.s3-website.eu-west-2.amazonaws.com/"
        github="https://github.com/SSSangha90/sports-react-quiz"
      />
      <ProjectContainer
        image={artwork}
        title="Chicago Art"
        description="A React and Redux project pulling in data from The Art Institute of Chicago's API using fetch.
        Furthermore, I have used styled-components for styling and React-router for navigation across the App."
        site="https://chicago-artwork-ruby.vercel.app/"
        github="https://github.com/SSSangha90/art-collection"
      />
      <ProjectContainer
        image={sunnys}
        title="Sunnys Electrics"
        description="Sunny's Electrics is a dynamic, hand-coded, fully-responsive website
        across desktop, tablet and mobile. Skills used: HTML5, CSS3,
        JavaScript, JQuery."
        site="https://sssangha90.github.io/sunnys-electrics/"
        github="https://github.com/SSSangha90/sunnys-electrics"
      />
      <ProjectContainer
        image={budgetapp}
        title="Budget App"
        description=" Javascript ES6 budget application. Calculations are made based on
        input, where you can view total income/expense, as well as the
        percentage of expenses compared to income."
        site="https://sssangha90.github.io/BudgetApp/"
        github="https://github.com/SSSangha90/BudgetApp"
      />
    </Container>
  );
};

export default ProjectsList;
