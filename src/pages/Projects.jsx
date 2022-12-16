import React from "react";
import { useState } from "react";
//Styled
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppMusic from "../components/musicPlayer/AppMusic";
//Animations
import { pageAnimation, frameContainer, frameTransition } from "../Animations";
import Wave from "../components/Wave.jsx";

const Projects = () => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const openModal = () => {
    setModal(!modal);
  };
  const spinner = () => {
    setVideoLoading(!videoLoading);
  };
  return (
    <ProjectsPage
      varianst={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      {/* <motion.div variants={frameContainer}>
        <Frame1 variants={frameTransition}></Frame1>
        <Frame2 variants={frameTransition}></Frame2>
        <Frame3 variants={frameTransition}></Frame3>
        <Frame4 variants={frameTransition}></Frame4>
      </motion.div> */}
      <SimpleSlider />
    </ProjectsPage>
  );
};

function SimpleSlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Slider {...settings}>
        <Project>
          <Slide>
            <Picture>
              <img src="src/img/kick_ace.png" alt="kick_ace" />
            </Picture>
            <ProjectPresentation>
              <h1>Kick-Ace</h1>
              <Stack>
                <img src="src/img/stack/ROR.png" alt="Ruby On Rails" />
                <img src="src/img/stack/JS.png" alt="JS" />
                <img src="src/img/stack/HTML.png" alt="HTML" />
                <img src="src/img/stack/CSS.png" alt="CSS" />
                <img src="src/img/stack/Figma.png" alt="Figma" />
                <img src="src/img/stack/Heroku.png" alt="Heroku" />
                <img src="src/img/stack/Github.png" alt="Github" />
                <img src="src/img/stack/Cloudinary.png" alt="Cloudinary" />
                <img src="src/img/stack/Postgre SQL.png" alt="Postgre SQL" />
              </Stack>
              <p>
                Kick-Ace est un jeu de fantasy tennis où chaque joueur doit
                constituer une équipe de 8 tennismen grâce à un système
                d'enchères. Le jeu est ensuite organisé par ligue de 4 à 8
                joueurs où chaque équipe va s'affronter en fonction des
                résultats des tennismen à l'ATP.
              </p>
              <Contact>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a
                    href="https://www.youtube.com/watch?v=ptb0CURbsCw"
                    target="_blank"
                  >
                    Voir la présentation
                  </a>
                </motion.button>
              </Contact>
            </ProjectPresentation>
            <Wave />
          </Slide>
        </Project>
        <Project>
          <Slide>
            <AppMusic />
            <Wave />
          </Slide>
        </Project>
        <Project>
          <Slide>
            <GameChanger>
              <img src="src/img/gameChanger.gif" alt="Game_changer" />
            </GameChanger>
            <GamePresentation>
              <h1>Game Changer</h1>
              <Stack>
                <img src="src/img/stack/API.png" alt="API" />
                <img src="src/img/stack/React.png" alt="React" />
                <img src="src/img/stack/Github.png" alt="Github" />
              </Stack>
              <p>
                Game Changer est un blog d'actualité sur les Jeux Videos avec la
                possibilité de voir les prochaines sorties, les jeux les mieux
                notés, ainsi que les plateformes sur lesquels on retrouve ces
                jeux.
              </p>
            </GamePresentation>
            <Wave />
          </Slide>
        </Project>
      </Slider>
    </motion.div>
  );
}

const Slide = styled(motion.div)`
  background: rgba(255, 255, 255, 0.4);
  height: 70vh;
  width: 80%;
  display: flex;
  align-items: center;
  border-radius: 3rem;
  position: relative;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 2.5rem;
  a:visited {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 1280px) {
    margin-bottom: -0.5rem;
    margin-top: -1rem;
    width: 80%;
  }
  @media (max-width: 834px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
    margin-top: 8%;
    height: 73vh;
    width: 80%;
  }
  @media (max-width: 667px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
    margin-top: 8%;
    height: 75vh;
    width: 80%;
  }
  @media (max-width: 359px) {
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0rem;
    margin-top: 10%;
    height: 72vh;
    width: 80%;
  }
`;

const Picture = styled(motion.div)`
  z-index: 2;
  img {
    width: 90%;
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
    display: flex;
    justify-content: center;
    padding-top: 2rem;
    img {
      width: 50%;
    }
  }
  @media (max-width: 667px) {
    display: flex;
    justify-content: center;
    img {
      width: 95%;
    }
  }
  @media (max-width: 359px) {
    display: flex;
    justify-content: center;
    margin-top: -2rem;
    img {
      width: 90%;
    }
  }
`;

const Stack = styled(motion.div)`
  display: flex;
  img {
    width: 3vh;
    height: 3vh;
    margin: 1rem 1rem 2rem 1rem;
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
    img {
      width: 2vh;
      height: 2vh;
      margin: 0rem 1rem 1rem 1rem;
    }
  }
  @media (max-width: 667px) {
    display: none;
  }
  @media (max-width: 359px) {
    display: none;
  }
`;

const ProjectPresentation = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-right: 8rem;
  width: 70%;
  z-index: 2;
  h1 {
    font-size: 5vh;
  }
  p {
    font-size: 2vh;
    text-align: justify;
    padding-top: 1rem;
    padding-bottom: 2.5rem;
    line-height: 3rem;
  }
  @media (max-width: 1280px) {
    margin-top: 3rem;
    p {
      padding-top: 0rem;
      line-height: 2.5rem;
    }
  }
  @media (max-width: 834px) {
    margin-right: 0rem;
    margin-top: -1.5rem;
    width: 85%;
    align-items: center;
    h1 {
      font-size: 5vh;
      margin-bottom: 1rem;
    }
    p {
      line-height: 2rem;
    }
  }
  @media (max-width: 667px) {
    margin-right: 0rem;
    width: 85%;
    align-items: center;
    h1 {
      font-size: 5vh;
      margin-bottom: 1rem;
    }
    p {
      display: none;
    }
  }
  @media (max-width: 359px) {
    margin-right: 0rem;
    width: 85%;
    h1 {
      font-size: 5vh;
      margin-bottom: 1rem;
      margin-top: -3rem;
    }
    p {
      display: none;
    }
  }
`;

const GamePresentation = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-right: 8rem;
  width: 70%;
  z-index: 2;
  h1 {
    font-size: 5vh;
  }
  p {
    font-size: 2vh;
    text-align: justify;
    padding-top: 1rem;
    padding-bottom: 2.5rem;
    line-height: 3rem;
  }
  @media (max-width: 1280px) {
    margin-top: 3rem;
    p {
      padding-top: 0rem;
      line-height: 2.5rem;
    }
  }
  @media (max-width: 834px) {
    margin-right: 0rem;
    width: 85%;
    align-items: center;
    h1 {
      font-size: 5vh;
      margin-bottom: 1rem;
    }
    p {
      line-height: 2rem;
    }
  }
  @media (max-width: 667px) {
    margin-right: 0rem;
    width: 85%;
    align-items: center;
    h1 {
      font-size: 5vh;
      margin-bottom: 1rem;
    }
    p {
      display: none;
    }
  }
  @media (max-width: 359px) {
    margin-right: 0rem;
    width: 85%;
    h1 {
      font-size: 5vh;
      margin-bottom: 1rem;
      margin-top: -3rem;
    }
    p {
      display: none;
    }
  }
`;

const Project = styled(motion.div)`
  margin-left: 10%;
  margin-top: 3rem;
  @media (max-width: 1280px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 834px) {
    margin-left: 10%;
    margin-top: 0rem;
  }
  @media (max-width: 667px) {
    margin-left: 10%;
    margin-top: 0rem;
  }
  @media (max-width: 359px) {
    margin-left: 10%;
    margin-top: 0rem;
  }
`;

const ProjectsPage = styled(motion.div)`
  .slick-arrow {
    z-index: -2;
    margin: 0rem 7rem 0rem 5rem;
    z-index: 1 !important;
    /* width: 2rem !important; */
    /* font-size: 2rem;
    background: red !important; */
  }
  button.slick-next:before {
    font-size: 3rem !important;
    color: #e2a48e !important;
  }
  button.slick-prev:before {
    font-size: 3rem !important;
    color: #e2a48e !important;
  }

  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
    .slick-arrow {
      display: none;
    }
    button.slick-next:before {
      display: none;
    }
    button.slick-prev:before {
      display: none;
    }
    .slick-dots {
      display: none !important;
    }
  }
  @media (max-width: 667px) {
    .slick-arrow {
      display: none;
    }
    button.slick-next:before {
      display: none;
    }
    button.slick-prev:before {
      display: none;
    }
    .slick-dots {
      display: none !important;
    }
  }
  @media (max-width: 359px) {
    .slick-arrow {
      display: none;
    }
    button.slick-next:before {
      display: none;
    }
    button.slick-prev:before {
      display: none;
    }
    .slick-dots {
      display: none !important;
    }
  }
`;

// //Frame Animation
// const Frame1 = styled(motion.div)`
//   position: fixed;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100vh;
//   background: #fffebf;
//   z-index: 2;
// `;
// const Frame2 = styled(Frame1)`
//   background: #ff8efb;
// `;
// const Frame3 = styled(Frame1)`
//   background: #8ed2ff;
// `;
// const Frame4 = styled(Frame1)`
//   background: #8effa0;
// `;

const Contact = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  button {
    padding: 1rem 2rem;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 20px;
    background: #e2a48e;
    color: white;
    border: none;
  }
  @media (max-width: 1280px) {
    height: 4rem;
    padding-bottom: 2rem;
    button {
      padding: 1rem 2rem;
      font-size: 1rem;
    }
  }
  @media (max-width: 834px) {
    height: 6rem;
    padding-bottom: 2rem;
    button {
      padding: 1rem 2rem;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 667px) {
    button {
      padding: 1rem 2rem;
      font-size: 1rem;
    }
  }
  @media (max-width: 359px) {
    height: 4rem;
    button {
      padding: 0.8rem 1.5rem;
      font-size: 0.8rem;
    }
  }
`;

const GameChanger = styled(motion.div)`
  img {
    width: 90%;
    padding: 2rem;
  }

  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 75%;
      padding: 0rem;
    }
  }
  @media (max-width: 667px) {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 90%;
      padding: 2rem;
    }
  }
  @media (max-width: 359px) {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 90%;
      padding: 2rem;
    }
  }
`;

export default Projects;
