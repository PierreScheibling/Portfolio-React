import React from "react";
import costard from "../img/costard.png";
//Styled
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Animations";
import { titleAnim } from "../Animations";
import { postAnim } from "../Animations";

const AboutMe = () => {
  const picture = {
    hidden: { scale: 1.5 },
    show: { scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Apropos>
        <Title>
          <h1>A Propos</h1>
        </Title>
        <Description>
          <Picture>
            <motion.img
              variants={picture}
              initial="hidden"
              animate="show"
              src={costard}
              alt="costard"
            />
          </Picture>
          <Curriculum>
            <Bio>
              <h2>Bio</h2>
            </Bio>
            <Experience>
              <h2>Experiences</h2>
            </Experience>
          </Curriculum>
        </Description>
      </Apropos>
    </motion.div>
  );
};

const Apropos = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const Title = styled(motion.div)``;

const Description = styled(motion.div)`
  display: flex;
  height: 70vh;
`;

const Curriculum = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
`;

const Bio = styled(motion.div)``;

const Experience = styled(motion.div)``;

const Picture = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  img {
    width: 90%;
    border-bottom: 2px solid black;
    border-bottom-width: thin;
  }
`;

export default AboutMe;
