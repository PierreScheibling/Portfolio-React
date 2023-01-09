// Library import
import { motion } from "framer-motion";
import styled from "styled-components";

export const WinningModal = () => {
  return (
    <WinningModalWP
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
    >
      <WinningModalInside>
        <TitleModal>
          <h2>Bravo !</h2>
        </TitleModal>

        <Contact>
          <p>Si vous souhaitez me contacter:</p>
          <a href="mailto=pierre@scheibling.fr">pierre@scheibling.fr</a>
        </Contact>
      </WinningModalInside>
    </WinningModalWP>
  );
};

// STYLE
//_______________________________________________________________________________
const WinningModalWP = styled(motion.div)`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: left;
  border-radius: 0.3rem;
`;

const TitleModal = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Signatura Monoline Script", sans-serif;
  font-size: 6rem;
  font-weight: lighter;
  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
    font-size: 4rem;
  }
  @media (max-width: 667px) {
    font-size: 2rem;
  }
  @media (max-width: 359px) {
  }
`;

const Contact = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  a {
    margin-top: 1rem;
    color: black;
    text-decoration: none;
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
    align-items: center;
    text-align: center;
  }
  @media (max-width: 667px) {
    align-items: center;
    text-align: center;
  }
  @media (max-width: 359px) {
  }
`;
const WinningModalInside = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
    align-items: center;
  }
  @media (max-width: 667px) {
    align-items: center;
  }
  @media (max-width: 359px) {
  }
`;
