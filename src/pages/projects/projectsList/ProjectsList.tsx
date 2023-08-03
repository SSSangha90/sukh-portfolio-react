import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./ProjectsList.style";
import sports from "../images/sportsquiz.png";
import sunnys from "../images/sunnys.png";
import budgetapp from "../images/budgetapp.png";

const ProjectsList: React.FC = () => {
  return (
    <Container>
      <div>
        <img
          alt=""
          style={{
            backgroundImage: `url(${sports})`,
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
        <div className="project-btns">
          <Link
            to="http://sports-react-quiz.s3-website.eu-west-2.amazonaws.com/"
            target="_blank"
          >
            Open
          </Link>
          <Link
            to="https://github.com/SSSangha90/sports-react-quiz"
            target="_blank"
          >
            Github
          </Link>
        </div>
      </div>
      <div>
        <img
          alt=""
          style={{
            backgroundImage: `url(${sunnys})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="description">
          <h4>Sunnys electrics</h4>
          <p>
            Sunny's Electrics is a dynamic, hand-coded, fully-responsive website
            across desktop, tablet and mobile. Skills used: HTML5, CSS3,
            JavaScript, JQuery.
          </p>
        </div>
        <div className="project-btns">
          <Link
            to="https://sssangha90.github.io/sunnys-electrics/"
            target="_blank"
          >
            Open
          </Link>
          <Link
            to="https://github.com/SSSangha90/sunnys-electrics"
            target="_blank"
          >
            Github
          </Link>
        </div>
      </div>
      <div>
        <img
          alt=""
          style={{
            backgroundImage: `url(${budgetapp})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="description">
          <h4>Budget App</h4>
          <p>
            Javascript ES6 budget application. Calculations are made based on
            input, where you can view total income/expense, as well as the
            percentage of expenses compared to income. HTML5 and CSS3 used also.
          </p>
        </div>
        <div className="project-btns">
          <Link to="https://sssangha90.github.io/BudgetApp/" target="_blank">
            Open
          </Link>
          <Link to="https://github.com/SSSangha90/BudgetApp" target="_blank">
            Github
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ProjectsList;
