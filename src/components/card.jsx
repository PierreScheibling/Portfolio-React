import { motion } from "framer-motion";
//Styled
import styled from "styled-components";

function Card(item) {
  return (
    <CardItem>
      <img src={item.img} alt="card" />
    </CardItem>
  );
}

const CardItem = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  img {
    width: 30%;
  }
`;

export default Card;
