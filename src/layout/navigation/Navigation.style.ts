import styled from "styled-components";

export const MobileInitial = styled.div`
  img {
    position: absolute;
    right: 1rem;
    top: 1rem;
    height: 2rem;
    width: auto;
    cursor: pointer;
  }
`;

export const Navbar = styled.nav`
  .main-nav {
    list-style: none;
    margin-top: 3rem;
    position: absolute;
    right: 3rem;
  }

  .main-nav li {
    display: inline-block;
    margin-left: 3.5rem;
  }

  .main-nav li a:link,
  .main-nav li a:visited {
    color: #fff;
    text-decoration: none;
    font-size: 110%;
  }

  @media only screen and (max-width: 1024px) {
    .main-nav li {
      margin-left: 30px;
    }
    h3 {
      margin-right: 50px;
    }
    h3:after {
      width: 600px;
    }
  }
`;

export const MobileNav = styled.div`
  height: 28vh;
  position: absolute;
  z-index: 222;
  background-color: white;
  opacity: 0.8;
  width: 100%;

  > div {
    margin-top: 1rem;
  }

  img {
    position: absolute;
    right: 1rem;
    top: 1rem;
    height: 2rem;
    width: auto;
    cursor: pointer;
  }

  .mobile-nav {
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    gap: 3rem;
  }

  .mobile-nav li {
    cursor: pointer;
  }

  .mobile-nav li a:link,
  .mobile-nav li a:visited {
    color: #000;
    text-decoration: none;
    font-size: 110%;
  }
`;
