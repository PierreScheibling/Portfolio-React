import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
//Styled
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";

const MusicSong = ({ currentSong, libraryStatus, setLibraryStatus }) => {
  return (
    <div className="song-container">
      <div className="song-container__imgWP">
        <img alt={currentSong.name} src={currentSong.cover}></img>
        <MusicLibraryButton>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => setLibraryStatus(!libraryStatus)}
          >
            <FontAwesomeIcon icon={faMusic} />
          </motion.button>
        </MusicLibraryButton>
      </div>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

const MusicLibraryButton = styled(motion.div)`
  position: absolute;
  right: 10%;
  top: 10%;
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

export default MusicSong;
