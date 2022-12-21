import React from "react";
import { motion } from "framer-motion";
import Cards from "../components/memory/cards.jsx";
//Styled
import styled from "styled-components";

const Competencies = () => {
  return (
    <GlobalCompetencies>
      <CompetenciesList>
        {/* <h2>Compétences</h2> */}
        <List>
          <Competence>
            <img src="src/img/stack/API.png" alt="API" />
            <p>API</p>
          </Competence>
          <Competence>
            <img src="src/img/stack/CSS.png" alt="CSS" />
            <p>CSS</p>
          </Competence>
          <Competence>
            <img src="src/img/stack/Figma.png" alt="Figma" />
            <p>Figma</p>
          </Competence>
          <Competence>
            <img src="src/img/stack/Github.png" alt="Github" />
            <p>Github</p>
          </Competence>
          <Competence>
            <img src="src/img/stack/HTML.png" alt="HTML" />
            <p>HTML</p>
          </Competence>
          <Competence>
            <img src="src/img/stack/JS.png" alt="Javascript" />
            <p>Javascript</p>
          </Competence>
          <Competence>
            <img src="src/img/stack/React.png" alt="React" />
            <p>React</p>
          </Competence>
          <Competence>
            <img src="src/img/stack/ROR.png" alt="Ruby On Rails" />
            <p>Ruby On Rails</p>
          </Competence>
        </List>
      </CompetenciesList>
      <Game>
        <Score>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Jouer
          </motion.button>
          <h2>
            Score: <span id="score">0</span>
          </h2>
        </Score>
        <Cards />
      </Game>
    </GlobalCompetencies>
  );
};

const GlobalCompetencies = styled(motion.div)`
  display: flex;
  height: 85vh;
  /* align-items: center; */
  justify-content: center;
`;

const CompetenciesList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 40%;
  h2 {
    padding: 1rem 0rem 2rem 0rem;
  }
`;

const List = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 3rem;
  }
`;

const Competence = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 0.5rem 0rem;
  p {
    margin-left: 3rem;
  }
`;

const Game = styled(motion.div)``;

const Score = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0rem;
  button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 20px;
    background: #e2a48e;
    color: white;
    border: none;
  }
`;

export default Competencies;
