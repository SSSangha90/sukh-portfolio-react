import React from "react";
import { Column } from "./AboutPage.style";

import htmlLogo from "./images/html.png";
import cssLogo from "./images/css.png";
import jsLogo from "./images/javascript.png";
import reactLogo from "./images/react.png";
import tsLogo from "./images/typescript.png";
import nodeLogo from "./images/node.png";
import reduxLogo from "./images/redux.png";
import awsLogo from "./images/aws.png";

const SkillsColumn: React.FC = () => {
  return (
    <Column>
      <img src={htmlLogo} alt="HTML5" />
      <img src={cssLogo} alt="CSS" />
      <img src={jsLogo} alt="JavaScript" />
      <img src={reactLogo} alt="React" />
      <img src={tsLogo} alt="TypeScript" />
      <img src={nodeLogo} alt="NodeJS" />
      <img src={reduxLogo} alt="Redux" />
      <img src={awsLogo} alt="AWS" />
    </Column>
  );
};

export default SkillsColumn;
