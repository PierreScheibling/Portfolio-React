import { useState, dispatch, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "./card.jsx";
//Styled
import styled from "styled-components";
import "./_memory.scss";
//Images
import API from "../../img/stack/API.png";
import CSS from "../../img/stack/CSS.png";
import Figma from "../../img/stack/Figma.png";
import GitHub from "../../img/stack/Github.png";
import HTML from "../../img/stack/HTML.png";
import JS from "../../img/stack/JS.png";
import React from "../../img/stack/React.png";
import ROR from "../../img/stack/ROR.png";
//Animations
import { pageAnimation } from "../../Animations";
import { popup } from "../../Animations";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

let compteur = 0;

function Cards() {
  const gameAnim = {
    hidden: { x: "200%", opacity: 0 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };
  let score = document.getElementById("score");
  const initialState = [
    { id: 1, name: "HTML", img: HTML, stat: "", check: false },
    { id: 1, name: "HTML", img: HTML, stat: "", check: false },
    { id: 2, name: "CSS", img: CSS, stat: "", check: false },
    { id: 2, name: "CSS", img: CSS, stat: "", check: false },
    { id: 3, name: "JS", img: JS, stat: "", check: false },
    { id: 3, name: "JS", img: JS, stat: "", check: false },
    { id: 4, name: "React", img: React, stat: "", check: false },
    { id: 4, name: "React", img: React, stat: "", check: false },
    { id: 5, name: "ROR", img: ROR, stat: "", check: false },
    { id: 5, name: "ROR", img: ROR, stat: "", check: false },
    { id: 6, name: "Figma", img: Figma, stat: "", check: false },
    { id: 6, name: "Figma", img: Figma, stat: "", check: false },
    { id: 7, name: "GitHub", img: GitHub, stat: "", check: false },
    { id: 7, name: "GitHub", img: GitHub, stat: "", check: false },
    { id: 8, name: "API", img: API, stat: "", check: false },
    { id: 8, name: "API", img: API, stat: "", check: false },
  ];

  const uniqueIds = [];
  const uniqueItems = initialState.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.id);

    if (!isDuplicate) {
      uniqueIds.push(element.id);
      return true;
    }
    return false;
  });

  const [items, setItems] = useState(
    initialState.sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  const [buttonText, setButtonText] = useState("Jouer");

  // useEffect(() => {
  //   const randomMemory = items;
  //   setItems(randomMemory);
  // });

  function replaceButton() {
    setButtonText("Rejouer");
  }

  function handleClick(id) {
    replaceButton();
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  const [isChecked, setIsChecked] = useState(false);

  function languageCheck(current) {
    {
      setIsChecked((check) => true);
    }
  }

  const [winIsShown, setWinIsShown] = useState(false);

  function win() {
    if (compteur > 7) {
      setWinIsShown((current) => !current);
    }
  }

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      compteur += 1;
      languageCheck(current);
      win();
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
        compteur;
      }, 1000);
    }
    score.innerHTML = compteur;
  }

  function resetGame() {
    setItems(initialState);
    compteur = 0;
  }

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <GlobalCompetencies>
        <CompetenciesList>
          <h2>Allez-vous toutes les trouver ?</h2>
          <List>
            {uniqueItems.map((item) => (
              <Competence>
                <img src={item.img} alt={item.id} />
                <p>{item.name}</p>
              </Competence>
            ))}
          </List>
        </CompetenciesList>
        <Game variants={gameAnim} initial="hidden" animate="show">
          <Score>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={resetGame}
            >
              <span id="play">{buttonText}</span>
            </motion.button>
            <h2>
              <div>Score:</div>
              <span id="score">0</span>
            </h2>
          </Score>
          <Deck>
            {items.map((item, index) => (
              <Card
                key={index}
                item={item}
                id={index}
                handleClick={handleClick}
              />
            ))}
            {winIsShown && (
              <WinWin variants={popup}>
                <h2>Bravo !</h2>
              </WinWin>
            )}
          </Deck>
        </Game>
      </GlobalCompetencies>
    </motion.div>
  );
}

const GlobalCompetencies = styled(motion.div)`
  display: flex;
  height: 85vh;
  align-items: center;
  justify-content: space-around;
`;

const CompetenciesList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 30%;
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
    font-size: 1.2rem;
    margin-left: 3rem;
  }
`;

const Score = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 0rem 2rem 0rem;
  button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 20px;
    background: #e2a48e;
    color: white;
    border: none;
  }
  h2 {
    display: flex;
    align-items: center;
    span {
      font-family: "Signatura Monoline Script", sans-serif;
      font-size: 3rem;
      font-weight: lighter;
      padding: 0rem 1rem;
    }
  }
`;

const Game = styled(motion.div)``;

const Deck = styled(motion.div)`
  display: grid;
  position: relative;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0.8em;
  img {
    width: 4rem;
    height: 4rem;
  }
`;

const WinWin = styled(motion.div)`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  h2 {
    font-family: "Signatura Monoline Script", sans-serif;
    font-size: 9rem;
    font-weight: lighter;
  }
`;

export default Cards;
