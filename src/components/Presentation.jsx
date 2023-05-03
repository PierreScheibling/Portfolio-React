import React from "react";
import moi from "../img/moi.png";
import { Link } from "react-router-dom";
//Styled
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim, postAnim } from "../utils/Animations";

//import image
import Github from "../img/stack/Github.png";

const PresentationSection = () => {
  return (
    <Presentation
      className="presentation"
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Greetings className="greeting">
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
          <motion.img src={moi} alt="Photo de présentation de Pierre SCHEIBLING" />
        </Image>
        <Welcome>
          <div className="hide">
            <motion.h2 className="titleh2" variants={postAnim}>
              Developpeur Front-End
            </motion.h2>
            <motion.p className="titleh2" variants={postAnim}>NextJS / ReactJS</motion.p>
          </div>
        </Welcome>
      </Greetings>
      <Contact>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Contact
          </motion.button>
        </Link>
      </Contact>
      <CodeLink variants={titleAnim}>
        <a
          href="https://github.com/PierreScheibling/Portfolio-React"
          target="_blank"
          rel="code Portfolio"
        >
          <img src={Github} />
          <p>Voir le code</p>
        </a>
      </CodeLink>
    </Presentation>
  );
};

//Styled Components
const Presentation = styled(motion.div)`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-y: hidden;
`;

const Greetings = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 1rem;
  h2 {
    font-size: clamp(0.8rem, 0.65rem + 0.601vw, 1.2rem);
  }

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

const Introduction = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  h2 {
    font-size: clamp(0.8rem, 0.65rem + 0.601vw, 2rem);
  }
  span {
    font-family: "Signatura Monoline Script", sans-serif;
    font-size: clamp(3rem, 0.59rem + 6.01vw, 6rem);
    font-weight: lighter;
    color: #e2a48e;
  }
`;

const Image = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: clamp(14rem, 30vw, 23rem);
    height: 100%;
    object-fit: contain;
  }
`;

const Welcome = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  line-height: 200%;
  h2 {
    font-size: clamp(0.8rem, 0.65rem + 0.601vw, 1.2rem);
  }
  p {
    font-style: italic;
  }
`;

const Contact = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
  button {
    padding: 0.7rem 1.6rem;
    font-size: clamp(0.8rem, 0.65rem + 0.601vw, 3rem);
    cursor: pointer;
    border-radius: 0.3rem;
    background: #e2a48e;
    color: white;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  }
`;

const CodeLink = styled(motion.div)`
 a {
    opacity: 0.7;
    position: absolute;
    bottom: 2%;
    left: 2%;
    display: flex;
    align-items: center;
    text-decoration: none;
    img {
      width: clamp(1rem, 3.5vw, 3rem);
    }
    p {
      font-size: clamp(0.8rem, 0.55rem + 0.601vw, 1.2rem);
      margin-left: 0.5rem;
    }
  }
`;

export default PresentationSection;
