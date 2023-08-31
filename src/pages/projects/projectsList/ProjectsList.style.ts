import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 10rem;
  gap: 3rem;
  position: absolute;
  width: 100%;

  > div {
    width: 24rem;
    height: 30rem;
    background-color: rgba(0, 0, 0, 0.6);
    position: relative;

    img {
      width: 100%;
      height: 60%;
    }

    .description {
      padding: 0 1rem;
      p {
        font-size: 0.8em;
        padding-top: 1rem;
      }
    }

    .project-btns {
      padding-top: 0.5rem;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      color: #3c91fa;
      position: absolute;
      bottom: 0.5rem;
      left: 8rem;

      a {
        color: #fff !important;
        border: 1px solid #3c91fa;
        border-radius: 0.25rem;
        padding: 0.125rem;
        font-size: 0.875rem;
      }

      a:link,
      a:visited {
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
        background-color: rgba(255, 255, 255, 0.6);
      }

      a:hover,
      a:active {
        background-color: #3c91fa;
        color: #fff;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 0 5%;

    .project-btns {
      left: 1rem !important;
    }
  }
`;
