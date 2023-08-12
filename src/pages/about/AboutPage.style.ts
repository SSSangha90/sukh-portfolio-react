import styled from "styled-components";

export const Column = styled.div`
  position: fixed;
  left: 0;
  width: 15rem;
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
