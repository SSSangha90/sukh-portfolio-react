import styled from "styled-components";

const AppContainer = styled.body`
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #dcdcdc;
  color: #6f1e51;
  font-family: "Merriweather", serif, "Arial";
  font-weight: 400;
  font-size: 20px;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;

  h1,
  h2 {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }

  h1 {
    margin-top: 0;
    color: #fff;
    font-size: 250%;
    word-spacing: 3px;
    text-shadow: 2px 2px #000;
  }

  h2 {
    font-size: 180%;
    word-spacing: 2px;
    text-align: left;
    margin-left: 40px;
  }

  h3 {
    margin-left: 40px;
  }

  h3:after {
    display: block;
    height: 4px;
    background-color: #6f1e51;
    content: " ";
    width: 950px;
    margin-top: 20px;
  }
`;

export default AppContainer;
