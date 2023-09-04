import styled from "styled-components";

export const Container = styled.header`
  height: 100vh;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 1024px) {
    height: 150vh;
  }

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 3rem;
  }
`;

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
  justify-content: space-between;
  height: 100vh;
  padding: 1rem 0;
  margin: 0;
  opacity: 0.7;

  img {
    width: 5.5rem;
    height: 5rem;

    &:nth-child(3),
    &:nth-child(5) {
      width: 5rem;
    }

    &:nth-child(6) {
      width: 6.5rem;
    }

    &:nth-child(7) {
      width: 4.5rem;
      height: 4.5rem;
    }
  }

  @media screen and (max-width: 750px) {
    position: relative;
    width: 100vw;
    background: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem;
    height: auto;
    padding: 1rem 5%;
    background-color: #dae8e7;

    img {
      width: 4.5rem;
      height: 4rem;

      &:nth-child(3),
      &:nth-child(5) {
        width: 3.5rem;
      }

      &:nth-child(6) {
        width: 5rem;
      }

      &:nth-child(7) {
        width: 4rem;
        height: 4rem;
      }
    }
  }
`;

export const About = styled.div`
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

  @media screen and (max-width: 750px) {
    position: relative;
    top: 0;
    width: auto;
    left: 0;
    margin: 8rem auto 1rem;
  }
`;
