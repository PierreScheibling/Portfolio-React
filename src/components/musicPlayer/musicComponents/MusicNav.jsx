import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
// Animations
import { motion } from "framer-motion";
//Styled
import styled from "styled-components";

const MusicNav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <MusicLibraryTitle>
      <h1>Music Player</h1>
      <MusicLibraryButton>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={() => setLibraryStatus(!libraryStatus)}
        >
          <FontAwesomeIcon icon={faMusic} />
        </motion.button>
      </MusicLibraryButton>
    </MusicLibraryTitle>
  );
};

const MusicLibraryTitle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 70%;
  h1 {
    display: flex;
    justify-content: center;
    font-size: clamp(1rem, 3vw, 4rem);
  }
  @media (max-width: 667px) {
    h1 {
      display: none;
    }
  }
`;

const MusicLibraryButton = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    margin: 1rem;
    padding: 1rem;
    font-size: clamp(1rem, 1.6vw, 3rem);
    cursor: pointer;
    border-radius: 50%;
    background: #e2a48e;
    color: white;
    border: none;
  }
`;

export default MusicNav;
