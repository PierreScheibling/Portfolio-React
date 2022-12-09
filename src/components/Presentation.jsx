import React from "react";
import moi from "../img/moi.png";
//Styled
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Animations";
import { titleAnim } from "../Animations";
import { postAnim } from "../Animations";

const PresentationSection = () => {
  const picture = {
    hidden: { scale: 1.3 },
    show: { scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Presentation>
        <Greetings>
          <Introduction>
            <div className="hide">
              <motion.h2 variants={titleAnim}>Hello, je suis</motion.h2>
            </div>
            <div className="hide">
              <motion.h2 variants={titleAnim}>
                <span> Pierre</span>
              </motion.h2>
            </div>
          </Introduction>
          <Image>
            <motion.img
              variants={picture}
              initial="hidden"
              animate="show"
              src={moi}
              alt="photo-id"
            />
          </Image>
          <Welcome>
            <div className="hide">
              <motion.h2 variants={postAnim}>Developpeur Front-End</motion.h2>
            </div>
          </Welcome>
        </Greetings>
        <Contact>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Contact
          </motion.button>
        </Contact>
      </Presentation>
    </motion.div>
  );
};

//Styled Components
const Presentation = styled(motion.div)`
  color: black;
  display: flex;
  flex-direction: column;
`;

const Greetings = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  font-size: 1.2rem;
`;

const Introduction = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
  h2 {
    margin-left: 5rem;
  }
  span {
    font-family: "Signatura Monoline Script", sans-serif;
    font-size: 8rem;
    font-weight: lighter;
    color: #e2a48e;
  }
`;

const Image = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70%;
  }
`;

const Welcome = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h2 {
    margin-right: 4rem;
  }
`;

const Contact = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 20px;
    background: #e2a48e;
    color: white;
    border: none;
  }
`;

export default PresentationSection;
