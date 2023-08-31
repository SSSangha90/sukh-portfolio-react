import styled from "styled-components";

export const Column = styled.div`
  position: fixed;
  z-index: 111;
  left: 0;
  width: 16rem;
  background-color: #dae8e7;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  gap: 1.5rem;
  height: auto;
  padding: 1rem 0;
  margin: 0;

  img {
    width: 5.5rem;
    height: 5rem;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    width: auto;
    margin-top: 11rem;

    img {
      width: 4.5rem;
      height: 4rem;
    }
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 11rem;
  width: 25rem;
  left: 20rem;
  border: 1px solid #dae8e7;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 1rem;

  p:first-child {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 480px) {
    position: relative;
    top: 9rem;
    width: 90%;
    margin: 2rem 0;
    left: 5%;
    font-size: 1rem;
  }
`;
