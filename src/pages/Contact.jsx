import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageContactAnimation, sliderContainer, slider } from "../Animations";
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
          <LinksDetails
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a
              href="https://www.linkedin.com/in/pierrescheibling"
              target="_blank"
              rel="linkedin"
            >
              <img src={linkedin} alt="Linkedin" />
              <h2>Linkedin</h2>
            </a>
          </LinksDetails>
          <LinksDetails
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a
              href="https://github.com/PierreScheibling"
              target="_blank"
              rel="Github"
            >
              <img src={github} alt="Github" />
              <h2>Github</h2>
            </a>
          </LinksDetails>
          <LinksDetails
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a
              href="mailto:pierre@scheibling.fr"
              target="_blank"
              rel="pierre@scheibling.fr"
            >
              <img src={mail} alt="Mail" />
              <h2>pierre@scheibling.fr</h2>
            </a>
          </LinksDetails>
        </Links>
      </ContactDetails>
    </ContactContainer>
  );
};

const ContactContainer = styled(motion.div)`
  overflow: hidden;
`;

const ContactDetails = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92vh;
  font-size: 0.8rem;
  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
    flex-direction: column;
  }
  @media (max-width: 667px) {
  }
  @media (max-width: 359px) {
  }
`;

const Picture = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  img {
    width: 75%;
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
    img {
      width: 50%;
    }
  }
  @media (max-width: 667px) {
  }
  @media (max-width: 359px) {
  }
`;

const Links = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 3rem;
  flex-grow: 2;
  img {
    margin: 1.5rem;
    width: 4.5rem;
  }
`;

const LinksDetails = styled(motion.div)`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      margin-left: 3rem;
    }
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
  background: #a3d3ff;
`;
const Frame2 = styled(Frame1)`
  background: #fdffa1;
`;
const Frame3 = styled(Frame1)`
  background: #fd9191;
`;
const Frame4 = styled(Frame1)`
  background: #e2a48e;
`;

export default Contact;
