import { motion } from "framer-motion";
//Styled
import styled from "styled-components";

function Card({ item, id, handleClick }) {
  const itemClass = item.stat ? "active" + item.stat : "";

  return (
    <CardItem
      className={"CardItem" + itemClass}
      onClick={() => handleClick(id)}
    >
      <img src={item.img} alt="card" />
    </CardItem>
  );
}

const CardItem = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  transform: rotateY(180deg);
  animation: 2s hideCard linear;
  transition: transform 0.5s;

  @keyframes hideCard {
    0%,
    70% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(180deg);
    }
  }

  img {
    width: 45%;
    transform: scale(0);
    animation: 2s hideImage linear;
    transition: transform 0.5s;
  }

  @keyframes hideImage {
    0%,
    70% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  .card.active {
    transform: rotateY(0);
  }
  .card.active {
    img {
      transform: scale(1);
    }
  }
  .card.wrong {
    background-color: red;
  }
  .card.correct {
    background-color: green;
  }
`;

export default Card;
