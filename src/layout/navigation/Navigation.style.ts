import styled from "styled-components";

export const Navbar = styled.nav`
  .main-nav {
    list-style: none;
    margin-top: 3rem;
    position: absolute;
    right: 2rem;
  }

  .main-nav li {
    display: inline-block;
    margin-left: 2.5rem;
  }

  .main-nav li a:link,
  .main-nav li a:visited {
    color: #fff;
    text-decoration: none;
    font-size: 110%;
  }
`;
