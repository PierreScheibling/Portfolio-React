import React from "react";
//Import Components
import Presentation from "../components/Presentation";
import BlobPage from "../components/Blob";
//Styled
import styled from "styled-components";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Presentation />
      <BlobPage />
    </div>
    // <AboutMe />
    // <Projects />
  );
};

export default LandingPage;
