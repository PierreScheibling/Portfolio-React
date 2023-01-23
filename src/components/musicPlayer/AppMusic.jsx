import React, { useState, useRef } from "react";
import MusicPlayer from "./musicComponents/MusicPlayer";
import MusicSong from "./musicComponents/MusicSong";
import MusicLibrary from "./musicComponents/MusicLibrary";
import data from "./MusicData";
import MusicNav from "./musicComponents/MusicNav";
import "./musicStyles/musicApp.scss";
//Style and animation
import styled from "styled-components";
import { motion } from "framer-motion";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[4]);
  const [isPlaying, setIsPlaying] = useState(false);
  //Ref
  const audioRef = useRef(null);
  //State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Calculate Percentage
    const roundedCurrent = Math.round(current);
    const roundedCDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedCDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <GlobalMusicPlayer
      className={`MusicApp ${libraryStatus ? "library-active" : ""}`}
    >
      <MusicNav />
      <MusicSong
        currentSong={currentSong}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <MusicPlayer
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <MusicLibrary
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </GlobalMusicPlayer>
  );
}

const GlobalMusicPlayer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default App;
