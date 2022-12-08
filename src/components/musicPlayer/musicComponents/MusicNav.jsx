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
`;

const MusicLibraryButton = styled(motion.div)`
  button {
    position: absolute;
    right: -10vh;
    bottom: 7vh;
    padding: 1.3rem;
    font-size: 1.3rem;
    cursor: pointer;
    border-radius: 50%;
    background: #e2a48e;
    color: white;
    border: none;
  }
`;

export default MusicNav;
