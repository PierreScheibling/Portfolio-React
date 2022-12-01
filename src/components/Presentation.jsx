import React from "react";
import moi from "../img/moi.png";
//Styled
import styled from "styled-components";
import { motion } from "framer-motion";

const PresentationSection = () => {
  return (
    <Presentation>
      <Introduction>
        <div className="hide">
          <h2>Hello I'm</h2>
        </div>
        <div className="hide">
          <h2>
            <span>Pierre</span>
          </h2>
        </div>
        <div className="hide">
          <h2>Welcome to my Portfolio !</h2>
        </div>
      </Introduction>
      <Image>
        <img src={moi} alt="photo-id" />
      </Image>
    </Presentation>
  );
};

//Styled Components
const Presentation = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: black;
`;

const Introduction = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  span {
    font-family: "Signatura Monoline Script", sans-serif;
    font-size: 10rem;
    font-weight: lighter;
    color: orange;
  }
`;

const Image = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: end;
  img {
    /* background: rgba(255, 255, 255, 0.8);
    padding: 1rem 2rem 0rem 2rem;
    border-radius: 5rem; */
    width: 50%;
  }
`;

export default PresentationSection;
