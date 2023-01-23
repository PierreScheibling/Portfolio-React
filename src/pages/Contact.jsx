import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  pageContactAnimation,
  sliderContainer,
  slider,
} from "../utils/Animations";
import coffee from "../img/coffee.png";
import mail from "../img/Mail.png";
import linkedin from "../img/Linkedin.png";
import github from "../img/stack/Github.png";
import coffeehappy from "../img/CoffeeHappy.png";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ContactContainer
      variants={pageContactAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <ContactDetails
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
        exit={{ opacity: 0 }}
      >
        <Picture>
          {isHovered ? (
            <img src={coffeehappy} alt="coffee" />
          ) : (
            <img src={coffee} alt="coffee" />
          )}
        </Picture>
        <Links>
          <LinksDetails>
            <a
              href="https://www.linkedin.com/in/pierrescheibling"
              target="_blank"
              rel="linkedin"
            >
              <img
                src={linkedin}
                alt="Linkedin"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              <h2
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Linkedin
              </h2>
            </a>
          </LinksDetails>
          <LinksDetails>
            <a
              href="https://github.com/PierreScheibling"
              target="_blank"
              rel="Github"
            >
              <img
                src={github}
                alt="Github"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              <h2
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Github
              </h2>
            </a>
          </LinksDetails>
          <LinksDetails>
            <a
              href="mailto:pierre@scheibling.fr"
              target="_blank"
              rel="pierre@scheibling.fr"
            >
              <img
                src={mail}
                alt="Mail"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              <h2
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                pierre@scheibling.fr
              </h2>
            </a>
          </LinksDetails>
        </Links>
      </ContactDetails>
    </ContactContainer>
  );
};

const ContactContainer = styled(motion.div)`
  overflow: hidden;
  height: 85%;
`;

const ContactDetails = styled(motion.div)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: clamp(0.5rem, 1.5vh, 2rem);
  @media (max-width: 834px) {
    flex-direction: column;
  }
`;

const Picture = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  img {
    width: clamp(12rem, 30vw, 40rem);
    height: 100%;
    object-fit: contain;
  }
`;

const Links = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 3rem;
  flex-grow: 2;
  img {
    margin: clamp(1.5rem, 1.5vw, 3rem);
    width: clamp(2rem, 8vw, 10rem);
    height: 100%;
    object-fit: contain;
  }
`;

const LinksDetails = styled(motion.div)`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  z-index: 15;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #cbe5fe;
`;
const Frame2 = styled(Frame1)`
  background: #feffd0;
`;
const Frame3 = styled(Frame1)`
  background: #fdc6c6;
`;
const Frame4 = styled(Frame1)`
  background: #ffcdba;
`;

export default Contact;
