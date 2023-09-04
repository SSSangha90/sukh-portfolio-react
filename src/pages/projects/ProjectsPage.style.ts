import styled from "styled-components";

export const Container = styled.header`
  height: 100vh;
  background-size: cover;
  background-position: center;

  .btn:link,
  .btn:visited {
    display: inline-block;
    padding: 10px 10px;
    font-weight: 600;
    text-decoration: none;
    border-radius: 200px;
    -webkit-transition: background-color 0.2s, color 0.2s;
    transition: background-color 0.2s, color 0.2s;
  }

  .btn-ghost:link,
  .btn-ghost:visited {
    border: 4px solid #3c91fa;
    color: #3c91fa;
    background-color: rgba(255, 255, 255, 0.8);
  }

  .btn:hover,
  .btn:active {
    background-color: #3c91fa;
    color: #fff;
  }

  @media only screen and (max-width: 1180px) {
    height: 150vh;
  }

  @media only screen and (max-width: 1024px) {
    height: 200vh;
  }

  @media only screen and (max-width: 920px) {
    height: 100vh;
  }

  @media only screen and (max-width: 820px) {
    height: 170vh;
  }

  @media only screen and (max-width: 540px) {
    height: 260vh;
  }
`;
