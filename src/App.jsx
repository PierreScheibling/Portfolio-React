import { useState } from "react";
//Import Pages
import LandingPage from "./pages/LandingPage";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <LandingPage />
    </div>
  );
}

export default App;

// <MyProjects />
// <AboutMe/>
// <Myskills/>
