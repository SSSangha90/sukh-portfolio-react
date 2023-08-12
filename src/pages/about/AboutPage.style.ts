import styled from "styled-components";

export const Column = styled.div`
  position: fixed;
  left: 0;
  width: 16rem;
  background-color: #dae8e7;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  gap: 1.5rem;
  height: 100vh;
  padding: 1rem 0;

  img {
    width: 5.5rem;
    height: 5rem;
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

  p:first-child {
    margin-bottom: 2rem;
  }
`;
