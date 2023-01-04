// Import libraries
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

// import logos
import API from "../../img/stack/API.png";
import CSS from "../../img/stack/CSS.png";
import Figma from "../../img/stack/Figma.png";
import Github from "../../img/stack/Github.png";
import HTML from "../../img/stack/HTML.png";
import JS from "../../img/stack/JS.png";
import Reactlogo from "../../img/stack/React.png";
import ROR from "../../img/stack/ROR.png";

// import components
import { Card } from "./card";
import { Skills } from "./skillList";
import { WinningModal } from "./winningModal";

// Import animations
import { pageAnimation } from "../../Animations";

// Import SCSS
import "./animations.scss";

export const Memory = () => {
  // Creation d'un Array contenant des objects pour chaque carte
  const initialState = [
    {
      id: 1,
      img: HTML,
      skillName: "HTML",
      matched: false,
    },
    {
      id: 2,
      img: CSS,
      skillName: "CSS",
      matched: false,
    },
    {
      id: 3,
      img: JS,
      skillName: "JS",
      matched: false,
    },
    {
      id: 4,
      img: Reactlogo,
      skillName: "React",
      matched: false,
    },
    {
      id: 5,
      img: ROR,
      skillName: "Ruby On Rails",
      matched: false,
    },
    {
      id: 6,
      img: Figma,
      skillName: "Figma",
      matched: false,
    },
    {
      id: 7,
      img: Github,
      skillName: "Github",
      matched: false,
    },
    {
      id: 8,
      img: API,
      skillName: "API",
      matched: false,
    },
  ];

  // States
  // Renvoi les cartes mélangées
  const [shuffledCards, setShuffledCards] = useState([]);
  // Renvoi une liste de skills (initialState)
  const [skills, setSkills] = useState([]);
  // Renvoi le score de l'utilisateur
  const [score, setScore] = useState(0);
  // Renvoi un boolean qui empêche l'utilisateur de jouer si deux cartes sont selectionner
  const [disabled, setDisabled] = useState(false);
  // Renvoi la première & la seconde carte choisie
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  // Permet de compter les essais de l'utilisateur
  const [round, setRound] = useState(0);
  // Permet d'afficher un btn rejouer quand l'utilisateur à commencer à jouer
  const [isBtn, setIsBtn] = useState(false);
  // Check si l'utilisateur à gagner
  const [isGameWon, setIsGameWon] = useState(false);

  useEffect(() => {
    // Appel la fonction dès que le composant est mounted
    shuffledDeck();
  }, []);

  // Permet de lancer cette fonction à chaque fois qu'une carte est choisie
  useEffect(() => {
    if (firstCard && secondCard) {
      // Si deux cartes sont choisies empêche l'utilistateur de jouer encore
      setDisabled(true);
      if (firstCard.skillName === secondCard.skillName) {
        // Check si les deux cartes choisie sont identiques
        // Augmente le score
        setScore((prevScore) => prevScore + 1);
        // Update l'objet skills et la valeur de matched
        setSkills((prev) =>
          prev.map((item) => {
            if (item.skillName === firstCard.skillName) {
              return { ...item, matched: true };
            } else {
              return item;
            }
          })
        );
        // Update l'objet ShuffleCards et la valeur de matched
        setShuffledCards((prev) =>
          prev.map((item) => {
            if (item.skillName === firstCard.skillName) {
              return { ...item, matched: true };
            } else {
              return item;
            }
          })
        );
        // Remet le jeu à niveau pour le prochain tour
        resetRound();
      } else {
        // Si l'utilisateur fait une erreur remet le jeu à niveau après 1s
        // Permet de faire jouer l'anim'
        setTimeout(() => resetRound(), 1000);
      }
    }
  }, [firstCard, secondCard]);

  // joue la fonction à chaque fois que kle state score evolue
  // Lance la fonction une fois la partie terminée
  useEffect(() => {
    if (score === initialState.length) {
      setIsGameWon(true);
    }
  }, [score]);

  // Fonction qui permet de mélanger le jeu de carte et de réinitialiser le jeu à 0
  const shuffledDeck = () => {
    const shuffledCards = [...initialState, ...initialState]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setShuffledCards(shuffledCards);
    setSkills(initialState);
    setSecondCard(null);
    setFirstCard(null);
    setRound(0);
    setScore(0);
    setIsBtn(false);
    setIsGameWon(false);
  };

  // Permet de set les cartes choisie par l'utilisateur au premier et au second click
  const handleChoice = (item) => {
    setIsBtn(true);
    if (firstCard) {
      item.id !== firstCard.id && setSecondCard(item);
    } else {
      setFirstCard(item);
    }
  };

  // Permet de remettre le jeu à niveau entre chaque tour
  const resetRound = () => {
    setFirstCard(null);
    setSecondCard(null);
    setRound((prevRound) => prevRound + 1);
    setDisabled(false);
  };

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <GlobalCompetencies>
        <SkillsSection>
          <SkillsTitle>
            <h2>Allez-vous toutes les trouver ?</h2>
          </SkillsTitle>
          <SkillList>
            {skills.map((skill, index) => (
              <Skills key={index} skill={skill} />
            ))}
          </SkillList>
        </SkillsSection>
        <GameSection>
          <GameInfo>
            {isBtn && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => shuffledDeck()}
              >
                Rejouer
              </motion.button>
            )}
            <div>
              <h2>Score:</h2>
              <span id="score">{score}</span>
            </div>
            <div>
              <h2>Essai{round > 1 && "s"}:</h2>
              <span id="score">{round}</span>
            </div>
          </GameInfo>
          <MemoryList>
            {shuffledCards.map((card, index) => {
              return (
                <Card
                  key={index}
                  card={card}
                  handleChoice={handleChoice}
                  flipped={
                    card === firstCard || card === secondCard || card.matched
                  }
                  selected={
                    card === firstCard || card === secondCard || card.matched
                  }
                  disabled={disabled}
                  matched={card.matched}
                />
              );
            })}
            <AnimatePresence>{isGameWon && <WinningModal />}</AnimatePresence>
          </MemoryList>
        </GameSection>
      </GlobalCompetencies>
    </motion.div>
  );
};

// STYLE
//_______________________________________________________________________________
const GlobalCompetencies = styled(motion.div)`
  display: flex;
  height: 85vh;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
`;

const MemoryList = styled(motion.ul)`
  display: grid;
  position: relative;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  margin: 2rem 0;
  padding: 0.5rem;
  gap: 0.5em;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
`;
const SkillList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 0.3rem;
  width: 100%;
`;

const SkillsSection = styled.div`
  h2 {
    font-size: clamp(0.8rem, 2vw, 1.2rem);
  }
`;

const SkillsTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.4rem;
`;

const GameSection = styled.div``;

const GameInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    padding: 0.5rem 1.4rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 0.3rem;
    background: #e2a48e;
    color: white;
    border: none;
  }
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    h2 {
      font-size: clamp(0.8rem, 2vw, 1.2rem);
    }
    span {
      font-family: "Signatura Monoline Script", sans-serif;
      font-size: 2rem;
      font-weight: lighter;
    }
  }
`;
