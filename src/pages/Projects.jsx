import React, { useState } from "react";

// import logos
import API from "../img/stack/API.png";
import cloudinary from "../img/stack/Cloudinary.png";
import Figma from "../img/stack/Figma.png";
import Github from "../img/stack/Github.png";
import Heroku from "../img/stack/Heroku.png";
import JS from "../img/stack/JS.png";
import Postgre from "../img/stack/Postgre-SQL.png";
import Reactlogo from "../img/stack/React.png";
import ROR from "../img/stack/ROR.png";
import NextJS from "../img/stack/Next.png";
import Sanity from "../img/stack/Sanity.png";
import Netlify from "../img/stack/Netlify.png";
import Shopify from "../img/stack/shopify.png";
import KickAce from "../img/kickAce.png";
import GameChangerPic from "../img/GameChanger.png";
import AdeleCarlesPic from "../img/carles-avocat.png";
import MatchyMatchyPic from "../img/matchy-matchy.png";
import BlushHome from "../img/Blush-HomePage.png";
import Tailwind from "../img/stack/Tailwind.png";
import Typescript from "../img/stack/Typescript.png";
import Prisma from "../img/stack/Prisma.png";

//Style
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppMusic from "../components/musicPlayer/AppMusic";

//Animations
import { pageAnimation, slideReveal } from "../utils/Animations";
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
            <ProjectPresentation initial={initial}
                  animate={animate}
                  transition={transition}>
              <AdelePic>
                <img src={AdeleCarlesPic} alt="Image du projet de création de site de l'Avocat Adèle Carles" />
              </AdelePic>
              <KickAceDescription>
                <h1>Adèle CARLES - Avocat</h1>
                <Stack>
                  <img src={NextJS} alt="NextJS, utilisation du langage dans le projet" />
                  <img src={Sanity} alt="Sanity, utilisation du CMS dans le projet" />
                  <img src={API} alt="API, utilisation dans le projet" />
                  <img src={Netlify} alt="Netlify, utilisation de l'hébergeur dans le projet" />
                  <img src={Github} alt="Github, utilisation dans le projet" />
                </Stack>
                <p>
                  Création d'un site pour le cabinet d'Avocat Adèle CARLES. Site créé en NextJS avec Sanity comme CMS, suivi d'un cahier des charges technique et visuel. Création d'un backoffice pour la gestion de la partie publications (blog). Hébergement sur Netlify.
                </p>
                <Contact>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a
                      href="https://carles-avocat.fr/"
                      target="_blank"
                    >
                      Site
                    </a>
                  </motion.button>
                </Contact>
              </KickAceDescription>
            </ProjectPresentation>
            <CodeLink>
              <a
                href="https://github.com/PierreScheibling/CarlesAdeleWS"
                target="_blank"
                rel="code site Adèle Carles"
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
            <ProjectPresentation  initial={initial}
                  animate={animate}
                  transition={transition}>
              <AdelePic>
                <img src={BlushHome} alt="Image du projet du site e-commerce Blush" />
              </AdelePic>
              <KickAceDescription>
                <h1>Blush Shop</h1>
                <Stack>
                  <img src={Typescript} alt="Typescript, utilisation du langage dans le projet" />
                  <img src={NextJS} alt="NextJS, utilisation du langage dans le projet" />
                  <img src={Prisma} alt="Prisma" />
                  <img src={Tailwind} alt="Tailwind" />
                  <img src={Netlify} alt="Netlify, utilisation de l'hébergeur dans le projet" />
                  <img src={Github} alt="Github, utilisation dans le projet" />
                </Stack>
                <p>
                  Création d'un site e-commerce de vêtements. Utilisation de stripe pour les paiements et gestion des articles, Auth0 pour l'authentification des utilisateurs (listing des commandes précédentes, gestion des profils). Site créé intégralement en Typescript, NextJS et Tailwind avec une base de données en Postgré SQL pour la gestion des commandes (et Prisma pour lier la base de données avec Stripe).
                </p>
                <Contact>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a
                      href="https://blush-shop.netlify.app/"
                      target="_blank"
                    >
                      Site
                    </a>
                  </motion.button>
                </Contact>
              </KickAceDescription>
            </ProjectPresentation>
            <CodeLink>
              <a
                href="https://github.com/PierreScheibling/Next-Ecommerce"
                target="_blank"
                rel="code site Blush"
              >
                <img src={Github} />
                <p>Voir le code</p>
              </a>
            </CodeLink>
            <Wave />
            </>
            )}
          </Slide>
        </Project>
        <Project>
          <Slide>
            {currentSlide === 2 && (
            <>
            <ProjectPresentation  initial={initial}
                  animate={animate}
                  transition={transition}>
              <AdelePic>
                <img src={MatchyMatchyPic} alt="Image du projet de création de site Matchy Matchy sur Shopify" />
              </AdelePic>
              <KickAceDescription>
                <h1>Matchy Matchy</h1>
                <StackMatchy>
                  <img src={Shopify} alt="Shopify, image du projet" />
                </StackMatchy>
                <p>
                  Accompagnement dans la création et la personnalisation d'un site marchand sur Shopify. Adaptation du code en fonction des besoins clients (sur la partie front-end comme back-end).
                </p>
                <Contact>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a
                      href="https://matchymatchy-paris.com/"
                      target="_blank"
                    >
                      Site
                    </a>
                  </motion.button>
                </Contact>
              </KickAceDescription>
            </ProjectPresentation>
            <Wave />
            </>
            )}
          </Slide>
        </Project>
        <Project>
          <Slide>
            {currentSlide === 3 && (
              <>
              <ProjectPresentation initial={initial}
                  animate={animate}
                  transition={transition}>
              <AdelePic>
                  <img src={KickAce} alt="kickace, image du projet" />
              </AdelePic>
              <KickAceDescription>
                  <h1>Kick-Ace</h1>
                  <Stack>
                    <img src={ROR} alt="Ruby On Rails, utilisation du langage dans le projet" />
                    <img src={JS} alt="JS, utilisation du langage dans le projet" />
                    <img src={Figma} alt="Figma, utilisation de l'outil dans le projet" />
                    <img src={Heroku} alt="Heroku, utilisation de l'hébergeur dans le projet" />
                    <img src={Github} alt="Github, utilisation dans le projet" />
                    <img src={cloudinary} alt="Cloudinary, utilisation dans le projet" />
                    <img src={Postgre} alt="Postgre SQL, utilisation du langage dans le projet" />
                  </Stack>
                  <p>
                    Projet réalisé dans la cadre de la formation au Wagon. Kick-Ace est un jeu de fantasy tennis où chaque joueur doit
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
              </>
            )}
          </Slide>
        </Project>
        <Project>
          <Slide>
            {currentSlide === 4 && (
              <>
                <InnerSlide
                  initial={initial}
                  animate={animate}
                  transition={transition}
                >
                  <AppMusic />
                </InnerSlide>
                <CodeLink>
                  <a
                    href="https://github.com/PierreScheibling/Portfolio-React/tree/master/src/components/musicPlayer"
                    target="_blank"
                    rel="code Music Player"
                  >
                    <img src={Github} />
                    <p>Voir le code</p>
                  </a>
                </CodeLink>
                <Wave />
              </>
            )}
          </Slide>
        </Project>
        <Project>
          <Slide className="slide-game-changer">
            {currentSlide === 5 && (
              <>
                <InnerSlide
                  initial={initial}
                  animate={animate}
                  transition={transition}
                >
                  <ProjectPresentation>
                    <VisualGame>
                      <img src={GameChangerPic} alt="Game changer, image du projet" />
                    </VisualGame>
                    <GamePresentation>
                      <h1>Game Changer</h1>
                      <Stack>
                        <img src={API} alt="API, utilisation dans le projet" />
                        <img src={Reactlogo} alt="React, utilisation du langage dans le projet" />
                        <img src={Github} alt="Github, utilisation dans le projet" />
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
                  </ProjectPresentation>
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

const ContainerProject = styled(motion.div)`
  height: 85%;
  overflow-y: hidden;
`;

const Project = styled(motion.div)`
  margin-left: 10%;
  margin-top: 3%;
`;

const ProjectsPage = styled(motion.div)`
  .slick-arrow {
    z-index: -2;
    margin-top: 0;
    margin-right: clamp(2rem, 12vh, 6rem);
    margin-bottom: 0;
    margin-left: clamp(2rem, 7vh, 7rem);
    z-index: 1 !important;
  }
  button.slick-next:before {
    opacity: 0.5;
    font-size: clamp(0.5rem, 6vh, 4rem) !important;
    color: #e2a48e !important;
  }
  button.slick-prev:before {
    opacity: 0.5;
    font-size: clamp(0.5rem, 6vh, 4rem) !important;
    color: #e2a48e !important;
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
`;

const Slide = styled(motion.div)`
  background: rgba(255, 255, 255, 0.4);
  height: clamp(60vh, 70vh, 80vh);
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 0.5rem; */
  position: relative;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 2.5rem;
  a:visited {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 834px) {
    flex-direction: column;
    justify-content: center;
    /* height: clamp(60vh, 60vh, 80vh); */
  }
`;

const InnerSlide = styled(motion.div)`
  display: flex;
  width: 100%;
  @media (max-width: 834px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const ProjectPresentation = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  h1 {
    font-size: clamp(1rem, 2.5vw, 4rem);
    font-weight: lighter;
    margin-bottom: 1rem;
  }
  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 4rem;
    font-size: clamp(0.1rem, 1vw, 2.2rem);
    text-align: justify;
    line-height: clamp(1rem, 3vw, 3rem);
  }

  @media (max-width: 834px) {
    flex-direction: column;
    p {
      margin-right: 0rem;
      font-size: clamp(0.1rem, 1.6vw, 2.2rem);
    }
  }
  @media (max-width: 667px) {
    p {
      display: none;
    }
  }
`;

const AdelePic = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 40%;
  img {
    width: 100%;
    object-fit: cover;
    padding: 1rem;
  }
  @media (max-width: 834px) {
    padding: 0;
    width: 65%;
  }
`;

const KickAceDescription = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60%;
  @media (max-width: 834px) {
    justify-content: center;
    align-items: center;
  }
`;

const CodeLink = styled(motion.div)`
  z-index: 2;
  a {
    opacity: 0.5;
    position: absolute;
    bottom: 1rem;
    left: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    img {
      width: clamp(1rem, 3vw, 7rem);
      height: 100%;
      object-fit: contain;
    }
    p {
      color: black;
      font-size: clamp(0.5rem, 1vw, 1.5rem);
      margin-left: 0.5rem;
    }
  }
`;

const Stack = styled(motion.div)`
  display: flex;
  align-items: center;
  img {
    width: clamp(1rem, 2vw, 3rem);
    height: 100%;
    object-fit: contain;
    margin: clamp(0.5rem, 1vw, 1rem);
  }
  @media (max-width: 834px) {
    img {
      width: clamp(1rem, 3vw, 3rem);
    }
  }

`;

const StackMatchy = styled(Stack)`
  img {
    width: clamp(1rem, 6vw, 4rem);
    margin: 0;
  }
`;

const VisualGame = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 40%;
  margin-bottom: 1rem;
  img {
    width: clamp(15rem, 25vw, 35rem);
    height: 100%;
    object-fit: contain;
  }
`;

const GamePresentation = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 834px) {
    justify-content: center;
    align-items: center;
  }
`;

const Contact = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  button {
    padding: 0.7rem 1.6rem;
    font-size: clamp(0.8rem, 0.65rem + 0.601vw, 3rem);
    cursor: pointer;
    /* border-radius: 0.3rem; */
    background: #e2a48e;
    color: white;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  }
`;

export default Projects;
