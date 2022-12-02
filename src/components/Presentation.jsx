import React from "react";
import moi from "../img/moi.png";
import kick_ace from "../img/kick_ace.png";
//Styled
import styled from "styled-components";
import { motion } from "framer-motion";

const PresentationSection = () => {
  return (
    <Presentation>
      <Greetings>
        <Introduction>
          <div className="hide">
            <h2>Hello, je suis</h2>
          </div>
          <div className="hide">
            <h2>
              <span> Pierre</span>
            </h2>
          </div>
        </Introduction>
        <Image>
          <img src={moi} alt="photo-id" />
        </Image>
        <Welcome>
          <div className="hide">
            <h2>Developpeur Front-End</h2>
          </div>
        </Welcome>
      </Greetings>
      <Contact>
        <button>Contact</button>
      </Contact>
    </Presentation>
  );
};

//Styled Components
const Presentation = styled(motion.div)`
  height: 100%;
  color: black;
  display: flex;
  flex-direction: column;
`;

const Greetings = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
`;

const Introduction = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  span {
    font-family: "Signatura Monoline Script", sans-serif;
    font-size: 10rem;
    font-weight: lighter;
    color: #e2a48e;
  }
`;

const Image = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    /* background: rgba(255, 255, 255, 0.8);
    padding: 1rem 2rem 0rem 2rem;
    border-radius: 5rem; */
    width: 85%;
  }
`;

const Welcome = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  line-height: 8rem;
`;

const Contact = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  button {
    padding: 1rem 2rem;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 20px;
    background: #e2a48e;
    color: white;
    border: none;
  }
`;

export default PresentationSection;
