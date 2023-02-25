import styled from "styled-components";

const Container = styled.nav`
  ul {
    text-decoration: none;
    list-style: none;
    display: flex;
    height: 5rem;
    width: auto;
    background-color: green;
    margin: 0;
    color: #fff;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    padding-right: 2rem;
  }

  li {
    font-size: 1rem;
    cursor: pointer;
  }
`;

export default Container;
