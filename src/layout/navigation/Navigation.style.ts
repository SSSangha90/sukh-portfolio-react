import styled from "styled-components";

export const Navbar = styled.nav`
  .main-nav {
    float: right;
    list-style: none;
    margin-top: 50px;
    position: absolute;
    margin-left: 700px;
  }

  .main-nav li {
    display: inline-block;
    margin-left: 40px;
  }

  .main-nav li a:link,
  .main-nav li a:visited {
    color: #fff;
    text-decoration: none;
    font-size: 110%;
  }

  .main-nav li a:hover,
  .main-nav li a:active {
    color: #6f1e51;
    font-weight: 600;
    text-shadow: 2px 2px #000;
    -webkit-transition: color font-weight text-shadow 0.2s;
    transition: color font-weight text-shadow 0.2s;
  }
`;
