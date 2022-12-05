import React from "react";
//Import Components
import Presentation from "../components/Presentation";
import BlobPage from "../components/Blob";
//Styled
import styled from "styled-components";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <FirstPage>
      <Presentation />
      <BlobPage />
    </FirstPage>
    // <AboutMe />
    // <Projects />
  );
};

const FirstPage = styled(motion.div)`
  overflow-y: hidden;
`;

export default LandingPage;
