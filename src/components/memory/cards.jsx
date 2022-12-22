import { useState, dispatch, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "./card.jsx";
//Styled
import styled from "styled-components";
import "./_memory.scss";
//Animations
import { pageAnimation } from "../../Animations";
import { popup } from "../../Animations";

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
    { id: 1, img: "src/img/stack/HTML.png", stat: "", check: false },
    { id: 1, img: "src/img/stack/HTML.png", stat: "", check: false },
    { id: 2, img: "src/img/stack/CSS.png", stat: "" },
    { id: 2, img: "src/img/stack/CSS.png", stat: "" },
    { id: 3, img: "src/img/stack/JS.png", stat: "" },
    { id: 3, img: "src/img/stack/JS.png", stat: "" },
    { id: 4, img: "src/img/stack/React.png", stat: "" },
    { id: 4, img: "src/img/stack/React.png", stat: "" },
    { id: 5, img: "src/img/stack/ROR.png", stat: "" },
    { id: 5, img: "src/img/stack/ROR.png", stat: "" },
    { id: 6, img: "src/img/stack/Figma.png", stat: "" },
    { id: 6, img: "src/img/stack/Figma.png", stat: "" },
    { id: 7, img: "src/img/stack/Github.png", stat: "" },
    { id: 7, img: "src/img/stack/Github.png", stat: "" },
    { id: 8, img: "src/img/stack/API.png", stat: "" },
    { id: 8, img: "src/img/stack/API.png", stat: "" },
  ];

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
            <Competence>
              <img src="src/img/stack/API.png" alt="API" />
              <p>API</p>
              {isChecked && <motion.img src="src/img/check.png" alt="check" />}
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
  justify-content: center;
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
    margin-left: 3rem;
  }
`;

const Score = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 0rem 3rem 0rem;
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
