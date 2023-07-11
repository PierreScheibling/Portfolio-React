// Libraries import
import styled from "styled-components";
import { motion } from "framer-motion";
import face from "../../img/Face.png";

// SCSS imports
import "./animations.scss";

export const Card = ({ card, ...props }) => {
  // Permet de récupérer les détails de chaque carte
  const { img } = card;
  // Permet de récupérer les props passé au composant
  // flipped: renvoi un boolean qui détermine si la carte doit être rotate
  // HandleChoice est une fonction qui permet de récupérer dans un event click l'élément cliqué
  // disabled: check si deux cartes sont en train de faire une rotation et empêche l'utilisateur de cliquer sur une troisième carte
  // matched: check si les deux cartes click sont les mêmes
  // selected: permet de selectionner les cartes cliquer (même check que "flipped", mais plus lisible de séparer)
  const { flipped, handleChoice, disabled, matched, selected } = props;

  const handleClick = (item) => {
    // Au click, check si l'utilisateur ne click pas sur une troisième carte et renvoi la fonction handlechoice
    if (!disabled) handleChoice(item);
  };

  return (
    <CardItem
      // Ajout d'une classe pour gérer les animations d'arrivée (possibilité de le faire avec framer-motion)
      className="memory__card"
      // Permet de passer des props à styled component et d'écrire du style en fonction
      //________________
      flip={flipped}
      disabled={disabled}
      selected={selected}
      matched={matched}
      //_________________
      onClick={() => handleClick(card)}
    >
      <div className="on">
        <img src={img} alt="image visible" draggable="false" />
      </div>
      <div className="off">
        <img src={face} alt="image non visible" draggable="false" />
      </div>
    </CardItem>
  );
};

// STYLE
//_______________________________________________________________________________
const CardItem = styled(motion.li)`
  opacity: 0;
  width: clamp(3rem, 8vw, 9rem);
  height: clamp(3rem, 8vw, 9rem);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 0.4rem; */
  transform: rotateY(180deg);
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
  .on {
    position: absolute;
    img {
      opacity: 0;
      width: 100%;
      height: 100%;
      padding: clamp(0.2rem, 0.5vw, 1rem);
    }
  }

  .off {
    img {
      opacity: 0.05;
      width: 100%;
      height: 100%;
      padding: clamp(0.1rem, 0.5vw, 1rem);
    }
  }

  ${({ flip }) =>
    flip &&
    `transform: rotateY(0deg);
  .on{img{opacity: 1}};.off{img{opacity:0}};`}
  ${({ selected }) =>
    selected &&
    `box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  background-color: #f7eeeb;
  border: 1px solid #e2a48e;`}
  ${({ matched }) => matched && `background-color: #7abb7a; border: none;`}
`;
