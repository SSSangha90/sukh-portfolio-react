import React from "react";
import { Routes, Route } from "react-router-dom";

import AppContainer from "./App.styled";
import LandingPage from "./pages/Landing";
import ProjectsPage from "./pages/projects/ProjectsPage";
import AboutPage from "./pages/about/AboutPage";
import Navigation from "./layout/navigation/Navigation";
import ExperiencePage from "./pages/experience/ExperiencePage";

const HomePage: React.FC = () => {
  return (
    <AppContainer>
      <Navigation />
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/about/*" element={<AboutPage />} />
        <Route path="/projects/*" element={<ProjectsPage />} />
        <Route path="/experience/*" element={<ExperiencePage />} />
      </Routes>
    </AppContainer>
  );
};

export default HomePage;
