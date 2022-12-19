import { useState } from "react";
import { motion } from "framer-motion";
import Card from "../components/card.jsx";
//Styled
import styled from "styled-components";

function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: "src/img/stack/HTML.png", stat: "active" },
      { id: 1, img: "src/img/stack/HTML.png", stat: "" },
      { id: 2, img: "src/img/stack/CSS.png", stat: "" },
      { id: 2, img: "src/img/stack/CSS.png", stat: "" },
      { id: 3, img: "src/img/stack/JS.png", stat: "correct" },
      { id: 3, img: "src/img/stack/JS.png", stat: "" },
      { id: 4, img: "src/img/stack/React.png", stat: "" },
      { id: 4, img: "src/img/stack/React.png", stat: "" },
      { id: 5, img: "src/img/stack/ROR.png", stat: "" },
      { id: 5, img: "src/img/stack/ROR.png", stat: "wrong" },
      { id: 6, img: "src/img/stack/Figma.png", stat: "" },
      { id: 6, img: "src/img/stack/Figma.png", stat: "" },
      { id: 7, img: "src/img/stack/Github.png", stat: "" },
      { id: 7, img: "src/img/stack/Github.png", stat: "" },
      { id: 8, img: "src/img/stack/API.png", stat: "" },
      { id: 8, img: "src/img/stack/API.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function handleClick(id) {
    alert(id);
  }

  return (
    <GameContainer>
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </GameContainer>
  );
}

const GameContainer = styled(motion.div)`
  width: 80%;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export default Cards;
