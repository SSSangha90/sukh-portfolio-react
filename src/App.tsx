import React from "react";

import AppContainer from "./App.styled";
import Header from "./layout/header/Header";

const HomePage: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <h1>Welcome</h1>
    </AppContainer>
  );
};

// header
// footer

export default HomePage;
