import React from "react";
import costard from "../img/costard.png";
//Styled
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleBioAnim, postBioAnim } from "../utils/Animations";

const AboutMe = () => {
  const picture = {
    hidden: { scale: 1.2 },
    show: {
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 1 },
    },
  };

  const bio1 =
    "Merci d'être venu jusque là, c'est peut être que vous voulez en savoir plus sur moi ? \n Après 6 ans dans le domaine du recrutement à échanger avec des profils de tous horizons, j'ai beaucoup appris sur les fonctionnements des organisations, mais surtout sur les personnalités des centaines de candidats que j'ai pu rencontrer. Toujours en essayant de comprendre et trouver la bonne place pour chaque personne. \n C'est cette curiosité qui m'a progressivement amené à me reconvertir. J'ai petit à petit appris à coder sur mon temps libre pour ensuite m'y consacrer à 100% avec la formation de Développeur Web du Wagon Bordeaux. \n Depuis, je travaille en freelance en tant que développeur avec une sensibilité particulière pour l'UX/UI. \n Si vous avez des besoins en création de site et/ou web design (UX/UI), n’hésitez pas à me contacter pour que l’on en discute.";

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
              alt="Photo de Pierre SCHEIBLING, professionnelle en costard"
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
  height: 85%;
  h2 {
    font-size: clamp(1rem, 1.5vw, 3rem);
    padding-bottom: clamp(1rem, 1vw, 3rem);
  }
  p {
    font-size: clamp(0.5rem, 1vw, 1.5rem);
    text-align: justify;
    line-height: clamp(0.7rem, 1.7vw, 2.5rem);
    margin-bottom: clamp(0.5rem, 1vw, 2.5rem);
  }
`;

const Description = styled(motion.div)`
  display: flex;
  margin-right: 3rem;
  @media (max-width: 834px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 0;
  }
`;

const Curriculum = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80%;
  @media (max-width: 834px) {
    margin-top: 2rem;
  }
`;

const Bio = styled(motion.div)`
  @media (max-width: 834px) {
    p {
      font-size: clamp(0.1rem, 1.6vw, 2.2rem);
      line-height: 150%;
    }
  }
  @media (max-width: 667px) {
    p {
      font-size: clamp(0.1rem, 1.9vw, 2.2rem);
    }
  }
`;

const Experience = styled(motion.div)`
  width: 100%;
  padding-top: clamp(1rem, 1.5vw, 2.5rem);
  @media (max-width: 359px) {
    display: none;
  }
`;

const XpLine = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .year {
    width: 30%;
  }
  .xp {
    display: flex;
    justify-content: flex-start;
    width: 70%;
  }
  @media (max-width: 834px) {
    p {
      font-size: clamp(0.1rem, 1.6vw, 2.2rem);
      line-height: 150%;
    }
  }
  @media (max-width: 667px) {
    p {
      font-size: clamp(0.1rem, 1.9vw, 2.2rem);
    }
  }
`;

const Picture = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  img {
    width: clamp(7rem, 25vw, 30rem);
    object-fit: contain;
    border-bottom: 2px solid black;
    border-bottom-width: thin;
  }
`;

export default AboutMe;
