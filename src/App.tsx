import React from "react";
import { Routes, Route } from "react-router-dom";

import AppContainer from "./App.styled";
import LandingPage from "./pages/Landing";
import ProjectsPage from "./pages/projects/ProjectsPage";
import AboutPage from "./pages/about/AboutPage";
import Navigation from "./layout/navigation/Navigation";

const HomePage: React.FC = () => {
  return (
    <AppContainer>
      <Navigation />
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/about/*" element={<AboutPage />} />
        <Route path="/projects/*" element={<ProjectsPage />} />
      </Routes>
    </AppContainer>
  );
};

export default HomePage;
