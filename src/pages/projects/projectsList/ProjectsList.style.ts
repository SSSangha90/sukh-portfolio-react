import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 10rem;
  margin: 0 5rem;
  gap: 3rem;

  > div {
    width: 24rem;
    height: 28rem;
    background-color: #000;
    border-radius: 5px;

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
  }
`;
