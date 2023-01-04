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
  position: relative;
  h1 {
    margin: 3rem;
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
  }
  @media (max-width: 667px) {
    h1 {
      display: none;
    }
  }
  @media (max-width: 359px) {
    h1 {
      display: none;
    }
  }
`;

const MusicLibraryButton = styled(motion.div)`
  button {
    position: absolute;
    right: -10vh;
    bottom: 7vh;
    padding: 1rem;
    font-size: 1.3rem;
    cursor: pointer;
    border-radius: 50%;
    background: #e2a48e;
    color: white;
    border: none;
  }
  @media (max-width: 1280px) {
    button {
      right: -20vh;
      bottom: 2vh;
    }
  }
  @media (max-width: 834px) {
    button {
      right: -4vh;
      bottom: 5vh;
      padding: 1.5rem;
      font-size: 1.3rem;
    }
  }
  @media (max-width: 667px) {
    button {
      right: -15vh;
      bottom: 3vh;
      padding: 1rem;
      font-size: 1rem;
    }
  }
  @media (max-width: 359px) {
    button {
      right: -18vh;
      bottom: -2vh;
      padding: 0.8rem;
      font-size: 0.7rem;
    }
  }
`;

export default MusicNav;
