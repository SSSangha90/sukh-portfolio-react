import React from "react";
import { JustIT, Line, Push, Tata } from "./Experience.style";

const TimeLine: React.FC = () => {
  return (
    <>
      <Line>
        <div className="first-point" />
        <div className="second-point" />
        <div className="third-point" />
      </Line>
      <JustIT>
        <h4>2018</h4>
        <h5>Just IT Training - Development Professional Programme</h5>
        <p>
          Self-funded development bootcamp covering full stack technologies.
          This included HTML5, CSS3 and JavaScript on the front end and C# and
          SQL on the backend. The course enabled me to gain a solid
          understanding of sofware development fundamentals, coding
          methodologies and logic. It also enabled me to build my own projects,
          which in turn helped me to get my first role within software
          engineering.
        </p>
      </JustIT>
      <Tata>
        <h4>2019 - 2020</h4>
        <h5>Tata Communications - Software Developer Apprentice</h5>
        <p>
          The apprenticeship allowed me to gain first-hand commercial
          experience, whilst also gaining valuable qualifications. During my
          time here I achieved certifications including Microsoft's Programming
          in HTML5 with JavaScript with CSS3 and a BCS Level 4 Diploma in
          Software Devlopment. Furthermore I had the opportunity to build full
          stack applications and features using ReactJS, Redux, NodeJS and
          MongoDB primarily.
        </p>
      </Tata>
      <Push>
        <h4>2020 - 2023</h4>
        <h5>Push Live - Senior UX Developer</h5>
        <p>
          Working for a cloud-based content/video distributor helped me gain a
          variety of valuable experience. Some of the big projects included
          migrating our main platform from jQuery to ReactJS with TypeScript -
          whlst building reusable components with React-Storybook. There was
          also Serverless functionality built with NodeJS on AWS when working
          with APIs - including Facebook, Google, Twitter and Shopify.
        </p>
      </Push>
    </>
  );
};

export default TimeLine;
