import React from "react";
import costard from "../img/costard.png";
//Styled
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Animations";
import { titleBioAnim } from "../Animations";
import { postBioAnim } from "../Animations";

const AboutMe = () => {
  const picture = {
    hidden: { scale: 1.2 },
    show: {
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 1 },
    },
  };

  const bio1 =
    "Merci d'être venus jusque là, c'est peut être que vous voulez en savoir plus sur moi ? \n Après 6 ans dans le domaine du recrutement à échanger avec des profils de tous horizons, j'ai beaucoup appris sur les fonctionnements des organisations, mais surtout sur les personnalités des centaines de candidats que j'ai pu rencontrer. Toujours en essayant de comprendre et trouver la bonne place pour chaque personne. \n C'est cette curiosité qui m'a progressivement amenée à me reconvertir. J'ai petit à petit appris à coder sur mon temps libre pour ensuite m'y consacrer à 100% avec la formation de Développeur Web du Wagon Bordeaux. \n Depuis, je travaille en freelance en tant que développeur avec une sensibilité particulière pour l'UX/UI. \n Si vous avez des besoins en création de site et/ou web design (UX/UI), n’hésitez pas à me contacter pour que l’on en discute.";

  const bio = bio1.split("\n").map((i) => {
    return <p>{i}</p>;
  });

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Apropos>
        <Description>
          <Picture>
            <motion.img
              variants={picture}
              initial="hidden"
              animate="show"
              src={costard}
              alt="costard"
            />
          </Picture>
          <Curriculum>
            <Bio>
              <motion.h2 variants={titleBioAnim}>Bio</motion.h2>
              <motion.p variants={postBioAnim}>{bio}</motion.p>
            </Bio>
            <Experience>
              <motion.h2 variants={titleBioAnim}>Experiences</motion.h2>
              <XpLine variants={postBioAnim}>
                <div className="year">
                  <p>2022 - Aujourd'hui</p>
                </div>
                <div className="xp">
                  <p>Freelance Développeur Front-End</p>
                </div>
              </XpLine>
              <XpLine variants={postBioAnim}>
                <div className="year">
                  <p>2022</p>
                </div>
                <div className="xp">
                  <p>Formation en développement web - Le Wagon Bordeaux</p>
                </div>
              </XpLine>
              <XpLine variants={postBioAnim}>
                <div className="year">
                  <p>2016 - 2022</p>
                </div>
                <div className="xp">
                  <p>Consultant Senior en Recrutement</p>
                </div>
              </XpLine>
              <XpLine variants={postBioAnim}>
                <div className="year">
                  <p>2016</p>
                </div>
                <div className="xp">
                  <p>Master Grande Ecole - KEDGE BS Bordeaux</p>
                </div>
              </XpLine>
            </Experience>
          </Curriculum>
        </Description>
      </Apropos>
    </motion.div>
  );
};

const Apropos = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  margin: 0rem 1.8rem;
  p {
    font-size: 0.8rem;
    line-height: 1.5rem;
  }
  @media (max-width: 834px) {
    margin: 0;
    p {
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 667px) {
    margin: 0;
    p {
      line-height: 1.5rem;
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 359px) {
    margin: 0;
    p {
      line-height: 1.5rem;
      margin-bottom: 2rem;
    }
  }
`;

const Description = styled(motion.div)`
  display: flex;
  height: 70vh;
  margin: 0rem 1.5rem;
  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
    flex-direction: column;
    font-size: 1rem;
  }
  @media (max-width: 667px) {
    flex-direction: column;
    font-size: 0.8rem;
  }
  @media (max-width: 359px) {
    flex-direction: column;
    font-size: 0.8rem;
  }
`;

const Curriculum = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 70%;
  text-align: justify;
  margin: 1rem 6rem 3rem 5rem;
  /* min-height: 80vh; */
  @media (max-width: 1280px) {
    margin: 0rem 3rem 1rem 3rem;
  }
  @media (max-width: 834px) {
    width: 90%;
    justify-content: center;
    margin: 1rem 3rem 1rem 3rem;
  }
  @media (max-width: 667px) {
    width: 90%;
    justify-content: center;
    margin: 1rem;
  }
  @media (max-width: 359px) {
    width: 90%;
    justify-content: center;
    margin: 1rem;
  }
`;

const Bio = styled(motion.div)`
  h2 {
    padding: 1rem 0rem;
  }
`;

const Experience = styled(motion.div)`
  width: 100%;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
  }
  @media (max-width: 667px) {
  }
  @media (max-width: 359px) {
    display: none;
  }
`;

const XpLine = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 1.5rem 0rem;
  .year {
    width: 20%;
  }
  .xp {
    display: flex;
    justify-content: flex-start;
    width: 80%;
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
    align-items: flex-start;
    margin: 1rem 0rem;
    .year {
      width: 20%;
    }
    .xp {
      width: 75%;
    }
  }
  @media (max-width: 667px) {
    align-items: flex-start;
    .year {
      width: 15%;
    }
    .xp {
      width: 65%;
    }
  }
  @media (max-width: 359px) {
  }
`;

const Picture = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  img {
    width: 80%;
    border-bottom: 2px solid black;
    border-bottom-width: thin;
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
    width: 100%;
    img {
      width: 30%;
    }
  }
  @media (max-width: 667px) {
    width: 100%;
    img {
      width: 60%;
    }
  }
  @media (max-width: 359px) {
    width: 100%;
    img {
      width: 75%;
    }
  }
`;

export default AboutMe;
