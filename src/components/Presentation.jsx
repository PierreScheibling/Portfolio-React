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
  height: 80%;
  @media (max-width: 1280px) {
    font-size: 0.9rem;
  }
  @media (max-width: 834px) {
    flex-direction: column;
    padding: 2rem 0rem;
    font-size: 1rem;
  }
  @media (max-width: 667px) {
    flex-direction: column;
    padding: 2rem 0rem;
    font-size: 1rem;
  }
  @media (max-width: 359px) {
    flex-direction: column;
    padding: 0rem 0rem;
    font-size: 0.7rem;
  }
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
  @media (max-width: 1280px) {
    h2 {
      margin-left: 4rem;
    }
    span {
      font-size: 5rem;
    }
  }
  @media (max-width: 834px) {
    flex-direction: row;
    margin-top: 0rem;
    h2 {
      margin-left: 2rem;
    }
    span {
      font-size: 6rem;
    }
  }
  @media (max-width: 667px) {
    flex-direction: row;
    margin-top: 0rem;
    h2 {
      margin-left: 1rem;
    }
    span {
      font-size: 3rem;
    }
  }
  @media (max-width: 359px) {
    flex-direction: row;
    margin-top: 0rem;
    h2 {
      margin-left: 1rem;
    }
    span {
      font-size: 3rem;
    }
  }
`;

const Image = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70%;
  }
  @media (max-width: 1600px) {
    img {
      width: 60%;
    }
  }
  @media (max-width: 1280px) {
    img {
      width: 60%;
    }
  }
  @media (max-width: 834px) {
    img {
      width: 50%;
    }
  }
  @media (max-width: 667px) {
    img {
      width: 60%;
    }
  }
  @media (max-width: 359px) {
    img {
      width: 50%;
    }
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
  @media (max-width: 1280px) {
    h2 {
      margin-right: 2rem;
    }
  }
  @media (max-width: 834px) {
    h2 {
      margin-top: 1.5rem;
      margin-right: 0rem;
    }
  }
  @media (max-width: 667px) {
    h2 {
      margin-top: 2rem;
      margin-right: 0rem;
    }
  }
  @media (max-width: 359px) {
    h2 {
      margin-top: 1rem;
      margin-right: 0rem;
    }
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
  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
    height: 7rem;
    button {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 667px) {
    height: 4rem;
    button {
      padding: 1rem 1.5rem;
      font-size: 1rem;
    }
  }
  @media (max-width: 359px) {
    height: 4rem;
    button {
      padding: 0.8rem 1.2rem;
      font-size: 0.8rem;
    }
  }
`;

export default PresentationSection;
