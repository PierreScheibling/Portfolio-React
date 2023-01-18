// Library import
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// Get images
import check from "../../img/check.png";

export const Skills = ({ skill }) => {
  // Récupère les informations de l'objet skill (destructuration)
  const { img, skillName, index, matched } = skill;
  return (
    <Competence
      key={index}
      // Création d'une classe custom pour gérer les animations (possibilité de le faire avec framer-motion)
      className="skill__item"
    >
      <ImageWrapper>
        <img className="skillImg" src={img} alt={skillName} />
        <AnimatePresence>
          {/* Check si dans l'objet la valeur match est true et affiche un check */}
          {matched && (
            <Checked
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={check}
              alt="check"
            />
          )}
        </AnimatePresence>
      </ImageWrapper>
      <SkillName matched={matched}>{skillName}</SkillName>
    </Competence>
  );
};

// STYLE
//_______________________________________________________________________________
const ImageWrapper = styled(motion.div)`
  position: relative;
  width: clamp(2rem, 3vw, 3rem);
  height: auto;
  .skillImg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Competence = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  width: 100%;
  opacity: 0;
`;

const SkillName = styled(motion.p)`
  font-size: clamp(1rem, 1.5vw, 2rem);
  text-align: center;
  ${({ matched }) => matched && "font-weight: bold; color: #7abb7a"}
  @media (max-width: 667px) {
    display: none;
  }
`;

const Checked = styled(motion.img)`
  position: absolute;
  bottom: 0rem;
  left: 3rem;
  width: clamp(1rem, 1.5vw, 2rem);
  height: clamp(1rem, 1.5vw, 2rem);
  @media (max-width: 667px) {
    bottom: -0.2rem;
    left: 1.5rem;
  }
`;
