import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Navbar } from "./Navigation.style";

const Navigation: React.FC = () => {
  const navigate = useNavigate();

  const navigateToProjects = useCallback(
    () => navigate("/projects"),
    [navigate]
  );

  return (
    <Navbar className="crossfade">
      <div className="row">
        <ul className="main-nav">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="" onClick={navigateToProjects}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </Navbar>
  );
};

export default Navigation;
