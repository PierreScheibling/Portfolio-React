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

const MusicLibraryButton = styled(motion.div)`
  position: absolute;
  right: 5%;
  bottom: 0;
  button {
    margin: 1rem;
    padding: clamp(0.7rem, 1vw, 1.5rem);
    font-size: clamp(0.7rem, 1.6vw, 3rem);
    cursor: pointer;
    border-radius: 50%;
    background: #e2a48e;
    color: white;
    border: none;
  }
`;

export default MusicNav;
