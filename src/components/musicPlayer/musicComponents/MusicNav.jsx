import React from "react";
// Animations
import { motion } from "framer-motion";
//Styled
import styled from "styled-components";

const MusicNav = () => {
  return (
    <MusicLibraryTitle>
      <h1>Music Player</h1>
    </MusicLibraryTitle>
  );
};

const MusicLibraryTitle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 70%;
  position: relative;
  h1 {
    display: flex;
    justify-content: center;
    font-size: clamp(1rem, 2.5vw, 4rem);
    margin-bottom: clamp(1rem, 2vw, 1rem);
  }
  @media (max-width: 667px) {
    h1 {
      display: none;
    }
  }
`;

export default MusicNav;
