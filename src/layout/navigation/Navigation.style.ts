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
  position: sticky;
  top: 0rem;
  .main-nav {
    list-style: none;
    margin-top: 3rem;
    position: absolute;
    right: 3rem;

    li:hover {
      border-bottom: 2px solid #3c91fa;
    }
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
      margin-left: 1.875rem;
    }
    h3 {
      margin-right: 3.75rem;
    }
    h3:after {
      width: 37.5rem;
    }
  }
`;

export const MobileNav = styled.div`
  height: auto;
  position: absolute;
  z-index: 222;
  background-color: #f4f4f4;
  width: 100%;
  opacity: 0.8;
  padding-bottom: 1rem;

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
    align-items: flex-start;
    gap: 2rem;
    padding-left: 1rem;
  }

  .mobile-nav li {
    cursor: pointer;
  }

  .mobile-nav li a:link,
  .mobile-nav li a:visited {
    color: #3c91fa;
    text-decoration: none;
    font-size: 110%;
  }
`;
