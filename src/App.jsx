import { useState } from "react";
//Import Pages
import LandingPage from "./pages/LandingPage";
import Projects from "./pages/Projects";
import Competencies from "./pages/Competencies";
import AboutMe from "./pages/AboutMe";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import BlobPage from "./components/Blob";
// Router
import { Routes, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/competencies" element={<Competencies />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
        <BlobPage />
      </AnimatePresence>
    </div>
  );
}

export default App;
