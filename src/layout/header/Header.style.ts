import styled from "styled-components";

const Container = styled.header`
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
    border: 4px solid #6f1e51;
    color: #6f1e51;
    background-color: rgba(255, 255, 255, 0.6);
  }

  .btn:hover,
  .btn:active {
    background-color: rgba(71, 19, 52, 0.6);
    color: #fff;
  }

  .web-dev {
    font-style: italic;
    text-transform: none;
    font-size: 200%;
    text-shadow: 2px 2px #000;
  }

  .hero-text-box {
    position: absolute;
    width: 1140px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;

export default Container;
