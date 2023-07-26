import React from "react";
import Navigation from "../navigation/Navigation";
import Container from "./Header.style";

const Header: React.FC = () => {
  return (
    <Container>
      <div className="hero-text-box">
        <h1>Sukh Sangha</h1>
        <h1 className="web-dev">Web Developer</h1>
        <a className="btn btn-ghost js--scroll-to-projects" href="#">
          View Projects
        </a>
      </div>
      <div className="crossfade">
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
      </div>
      <Navigation />
    </Container>
  );
};

export default Header;
