import React from "react";
import { Routes, Route } from "react-router-dom";

import AppContainer from "./App.styled";
import LandingPage from "./pages/Landing";
import ProjectsPage from "./pages/projects/ProjectsPage";

const HomePage: React.FC = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/projects/*" element={<ProjectsPage />} />
      </Routes>
    </AppContainer>
  );
};

export default HomePage;
