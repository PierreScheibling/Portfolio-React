import React from "react";
import { motion } from "framer-motion";
import Cards from "../components/cards.jsx";
//Styled
import styled from "styled-components";

const Competencies = () => {
  return (
    <GlobalCompetencies>
      <h2>Compétences</h2>

      <Cards />
    </GlobalCompetencies>
  );
};

const GlobalCompetencies = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Competencies;
