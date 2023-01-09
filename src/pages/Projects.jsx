import React, { useState } from "react";

// import logos
import API from "../img/stack/API.png";
import cloudinary from "../img/stack/Cloudinary.png";
import CSS from "../img/stack/CSS.png";
import Figma from "../img/stack/Figma.png";
import Github from "../img/stack/Github.png";
import Heroku from "../img/stack/Heroku.png";
import HTML from "../img/stack/HTML.png";
import JS from "../img/stack/JS.png";
import Postgre from "../img/stack/Postgre-SQL.png";
import Reactlogo from "../img/stack/React.png";
import ROR from "../img/stack/ROR.png";

//Style
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppMusic from "../components/musicPlayer/AppMusic";

//Animations
import { pageAnimation, slideReveal } from "../Animations";
import Wave from "../components/Wave.jsx";

const Projects = () => {
  return (
    <ProjectsPage
      variant={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
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

  const [currentSlide, setCurrentSlide] = useState(0);

  const { animate, initial, transition } = slideReveal;

  return (
    <ContainerProject
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Slider
        {...settings}
        afterChange={(currentSlide) => {
          setCurrentSlide(currentSlide);
        }}
      >
        <Project>
          <Slide>
            <ProjectPresentation>
              <KickAcePicture>
                <img src="src/img/kick_ace.png" alt="kick_ace" />
              </KickAcePicture>
              <KickAceDescription>
                <h1>Kick-Ace</h1>
                <Stack>
                  <img src={ROR} alt="Ruby On Rails" />
                  <img src={JS} alt="JS" />
                  <img src={HTML} alt="HTML" />
                  <img src={CSS} alt="CSS" />
                  <img src={Figma} alt="Figma" />
                  <img src={Heroku} alt="Heroku" />
                  <img src={Github} alt="Github" />
                  <img src={cloudinary} alt="Cloudinary" />
                  <img src={Postgre} alt="Postgre SQL" />
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
                      Présentation
                    </a>
                  </motion.button>
                </Contact>
              </KickAceDescription>
            </ProjectPresentation>
            <CodeLink>
              <a
                href="https://github.com/Flolq/KICK_ACE"
                target="_blank"
                rel="code Kick-Ace"
              >
                <img src={Github} />
                <p>Voir le code</p>
              </a>
            </CodeLink>
            <Wave />
          </Slide>
        </Project>
        <Project>
          <Slide>
            {currentSlide === 1 && (
              <>
                <InnerSlide
                  initial={initial}
                  animate={animate}
                  transition={transition}
                >
                  <AppMusic />
                </InnerSlide>
                <CodeLinkMusic>
                  <a
                    href="https://github.com/PierreScheibling/Portfolio-React/tree/master/src/components/musicPlayer"
                    target="_blank"
                    rel="code Music Player"
                  >
                    <img src={Github} />
                    <p>Voir le code</p>
                  </a>
                </CodeLinkMusic>
                <Wave />
              </>
            )}
          </Slide>
        </Project>
        <Project>
          <Slide className="slide-game-changer">
            {currentSlide === 2 && (
              <>
                <InnerSlide
                  initial={initial}
                  animate={animate}
                  transition={transition}
                >
                  <GameChanger>
                    <VisualGame>
                      <img src="src/img/GameChanger.png" alt="Game_changer" />
                    </VisualGame>
                    <GamePresentation>
                      <h1>Game Changer</h1>
                      <Stack>
                        <img src={API} alt="API" />
                        <img src={Reactlogo} alt="React" />
                        <img src={Github} alt="Github" />
                      </Stack>
                      <p>
                        Game Changer est un blog d'actualité sur les Jeux Videos
                        avec la possibilité de voir les prochaines sorties, les
                        jeux les mieux notés, ainsi que les plateformes sur
                        lesquels on retrouve ces jeux.
                      </p>
                      <Contact>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <a
                            href="https://gameschanger.netlify.app/"
                            target="_blank"
                          >
                            Site
                          </a>
                        </motion.button>
                      </Contact>
                    </GamePresentation>
                  </GameChanger>
                  <CodeLink>
                    <a
                      href="https://github.com/PierreScheibling/GameChanger"
                      target="_blank"
                      rel="code Game Changer"
                    >
                      <img src={Github} />
                      <p>Voir le code</p>
                    </a>
                  </CodeLink>
                </InnerSlide>
                <Wave />
              </>
            )}
          </Slide>
        </Project>
      </Slider>
    </ContainerProject>
  );
}

const ContainerProject = styled(motion.div)``;

const Project = styled(motion.div)`
  margin-left: 10%;
  margin-top: 12vh;
  @media (max-width: 1280px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 834px) {
    margin-top: 0vh;
    margin-left: 10%;
  }
  @media (max-width: 667px) {
    margin-top: 0vh;
    margin-left: 10%;
  }
  @media (max-width: 359px) {
    margin-top: 0vh;
    margin-left: 10%;
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

const InnerSlide = styled(motion.div)`
  display: flex;
  width: 100%;
  @media (max-width: 1280px) {
    /* margin-bottom: -0.5rem;
    margin-top: -1rem; */
  }
  @media (max-width: 834px) {
    flex-direction: column;
    justify-content: center;
    /* margin-bottom: 2rem;
    margin-top: 8%; */
  }
  @media (max-width: 667px) {
    flex-direction: column;
    justify-content: center;
    /* margin-bottom: 2rem;
    margin-top: 8%; */
  }
  @media (max-width: 359px) {
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0rem;
    margin-top: 10%;
  }
`;

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
  position: relative;
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
    justify-content: space-around;
    margin-bottom: 0rem;
    margin-top: 10%;
    height: 72vh;
    width: 80%;
  }
`;

const CodeLink = styled(motion.div)`
  a {
    position: absolute;
    bottom: 1rem;
    left: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    img {
      width: 4%;
    }
    p {
      color: black;
      font-size: 0.7rem;
      margin-left: 0.5rem;
    }
  }
`;

const CodeLinkMusic = styled(motion.div)`
  a {
    z-index: 0;
    position: absolute;
    bottom: 1rem;
    left: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    img {
      width: 4%;
    }
    p {
      color: black;
      font-size: 0.7rem;
      margin-left: 0.5rem;
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
  align-items: center;
  justify-content: center;
  padding-right: 4rem;
  z-index: 2;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1rem;
    text-align: justify;
    padding-top: 1rem;
    padding-bottom: 2.5rem;
    line-height: 3rem;
  }
  @media (max-width: 1727px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 1280px) {
    margin-top: 3rem;
    p {
      padding-top: 0rem;
      line-height: 2.5rem;
    }
  }
  @media (max-width: 834px) {
    flex-direction: column;
    padding-right: 0;
    width: 85%;
    align-items: center;
    h1 {
      font-size: 5vh;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      padding-top: 1rem;
      line-height: 2rem;
    }
  }
  @media (max-width: 667px) {
    flex-direction: column;
    padding-right: 0;
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
    flex-direction: column;
    margin-right: 0rem;
    width: 85%;
    padding-right: 0;
    h1 {
      font-size: 5vh;
      margin-bottom: 1.5rem;
    }
    p {
      display: none;
    }
  }
`;

const KickAcePicture = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  margin-top: -6rem;
  img {
    width: 100%;
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
    display: flex;
    justify-content: center;
    img {
      width: 50%;
    }
  }
  @media (max-width: 667px) {
    img {
      width: 95%;
    }
  }
  @media (max-width: 359px) {
    margin-top: -4rem;
    img {
      width: 85%;
    }
  }
`;

const KickAceDescription = styled(motion.div)`
  display: flex;
  flex-direction: column;
  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 667px) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 359px) {
    justify-content: center;
    align-items: center;
  }
`;

const GameChanger = styled(motion.div)`
  display: flex;
  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 667px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 359px) {
    align-items: center;
    justify-content: center;
  }
`;

const VisualGame = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80%;
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
    img {
      width: 50%;
    }
  }
  @media (max-width: 667px) {
    img {
      width: 70%;
      margin-bottom: 3rem;
    }
  }
  @media (max-width: 359px) {
    img {
      width: 60%;
      margin-bottom: 2rem;
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
    font-size: 3rem;
  }
  p {
    font-size: 1rem;
    text-align: justify;
    padding-top: 1rem;
    padding-bottom: 2.5rem;
    line-height: 3rem;
  }

  @media (max-width: 1727px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 1280px) {
    margin-top: 3rem;
    p {
      padding-top: 0rem;
      line-height: 2.5rem;
    }
  }
  @media (max-width: 834px) {
    margin-right: 2rem;
    margin-left: 3rem;
    width: 85%;
    align-items: center;
    h1 {
      font-size: 5vh;
      margin-bottom: 1rem;
    }
    p {
      margin-top: 1.5rem;
      line-height: 2rem;
    }
  }
  @media (max-width: 667px) {
    margin: 0;
    width: 85%;
    align-items: center;
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    p {
      display: none;
    }
  }
  @media (max-width: 359px) {
    margin: 0;
    width: 85%;
    h1 {
      font-size: 5vh;
    }
    p {
      display: none;
    }
  }
`;

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

export default Projects;
