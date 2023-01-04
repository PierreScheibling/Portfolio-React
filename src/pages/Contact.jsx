import styled from "styled-components";
import { motion } from "framer-motion";
import { pageContactAnimation, sliderContainer, slider } from "../Animations";
import coffee from "../img/coffee.png";

const Contact = () => {
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
          <img src={coffee} alt="coffee" />
        </Picture>
        <Links></Links>
      </ContactDetails>
    </ContactContainer>
  );
};

const ContactContainer = styled(motion.div)`
  min-height: 80vh;
  overflow: hidden;
`;

const ContactDetails = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const Picture = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const Links = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 2;
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
