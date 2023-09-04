import styled from "styled-components";

export const Container = styled.header`
  height: 100vh;
  background-size: cover;
  background-position: center;

  .btn:link,
  .btn:visited {
    display: inline-block;
    padding: 0.625rem 0.625rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 12.5rem;
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

  @media only screen and (max-width: 1180px) {
    .hero-text-box {
      width: 100%;
      padding: 0 10%;
    }
  }

  @media only screen and (max-width: 1024px) {
    margin-top: -5rem;
    height: 110vh;

    .hero-text-box {
      width: 100%;
      padding: 0 5%;
    }
  }

  @media only screen and (max-width: 915px) {
    height: 120vh;

    .hero-text-box {
      width: 100%;
      padding: 10% 10% 0;
      font-size: 80%;
    }
  }

  @media only screen and (max-width: 540px) {
    .hero-text-box {
      font-size: 80%;
    }
  }

  @media only screen and (max-width: 480px) {
    background-size: cover;
    background-position: center;
    margin-top: -5rem;
    height: 112vh;

    .hero-text-box {
      width: 100%;
      padding: 0 5%;

      h1 {
        font-size: 2rem;
      }
    }
  }
`;

export const Social = styled.div`
  img {
    width: 2rem;
    height: auto;
    margin: 0 0 0.5rem 0.25rem;
    cursor: pointer;
  }

  img:first-child {
    margin-right: 1rem;
  }
`;
