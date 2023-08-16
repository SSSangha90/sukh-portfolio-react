import styled from "styled-components";

export const Container = styled.header`
  height: 100vh;
  background-size: cover;
  background-position: center;

  img {
    margin: 2rem 0;
  }

  .cv-download {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000;

    > img {
      width: 2rem;
      height: auto;
      cursor: pointer;
    }
  }
`;

export const Line = styled.div`
  position: absolute;
  width: 100%;
  color: red;
  top: 60%;
  display: block;
  border: 0.25rem solid #fff;
  opacity: 0.6;

  .first-point {
    &:after {
      color: #fff;
      border-left: 2rem solid transparent;
      border-right: 2rem solid transparent;
      border-bottom: 2rem solid;
      display: inline-block;
      content: "";
      position: absolute;
      left: 26rem;
      margin: -2rem;
    }
  }

  .second-point {
    &:after {
      color: #fff;
      border-left: 2rem solid transparent;
      border-right: 2rem solid transparent;
      border-top: 2rem solid;
      display: inline-block;
      content: "";
      position: absolute;
      left: 54%;
      margin: 0rem;
    }
  }

  .third-point {
    &:after {
      color: #fff;
      border-left: 2rem solid transparent;
      border-right: 2rem solid transparent;
      border-bottom: 2rem solid;
      display: inline-block;
      content: "";
      position: absolute;
      right: 20rem;
      margin: -2rem;
    }
  }
`;

export const JustIT = styled.div`
  position: absolute;
  top: 12rem;
  width: 30rem;
  left: 18rem;
  border: 1px solid #dae8e7;
  border-radius: 1rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Tata = styled.div`
  position: absolute;
  top: 65%;
  width: 33rem;
  left: 40%;
  border: 1px solid #dae8e7;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 1rem;
`;

export const Push = styled.div`
  position: absolute;
  top: 12rem;
  width: 30rem;
  right: 6rem;
  border: 1px solid #dae8e7;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 1rem;
`;
