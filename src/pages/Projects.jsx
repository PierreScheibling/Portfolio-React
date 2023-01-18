import React, { useState } from 'react'

// import logos
import API from '../img/stack/API.png'
import cloudinary from '../img/stack/Cloudinary.png'
import CSS from '../img/stack/CSS.png'
import Figma from '../img/stack/Figma.png'
import Github from '../img/stack/Github.png'
import Heroku from '../img/stack/Heroku.png'
import HTML from '../img/stack/HTML.png'
import JS from '../img/stack/JS.png'
import Postgre from '../img/stack/Postgre-SQL.png'
import Reactlogo from '../img/stack/React.png'
import ROR from '../img/stack/ROR.png'
import KickAce from '../img/kickAce.png'
import GameChangerPic from '../img/GameChanger.png'

//Style
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AppMusic from '../components/musicPlayer/AppMusic'

//Animations
import { pageAnimation, slideReveal } from '../Animations'
import Wave from '../components/Wave.jsx'

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
  )
}

function SimpleSlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const [currentSlide, setCurrentSlide] = useState(0)

  const { animate, initial, transition } = slideReveal

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
          setCurrentSlide(currentSlide)
        }}
      >
        <Project>
          <Slide>
            <ProjectPresentation>
              <KickAcePicture>
                <img src={KickAce} alt="kickace" />
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
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
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
            {currentSlide === 2 && (
              <>
                <InnerSlide
                  initial={initial}
                  animate={animate}
                  transition={transition}
                >
                  <ProjectPresentation>
                    <VisualGame>
                      <img src={GameChangerPic} alt="Game_changer" />
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
                            type: 'spring',
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
  )
}

const ContainerProject = styled(motion.div)`
  height: 85vh;
  overflow-y: hidden;
`

const Project = styled(motion.div)`
  margin-left: 10%;
  margin-top: 2%;
  height: 100%;
`

const ProjectsPage = styled(motion.div)`
  .slick-arrow {
    z-index: -2;
    margin-top: 0;
    margin-right: clamp(2rem, 12vh, 7rem);
    margin-bottom: 0;
    margin-left: clamp(2rem, 8vh, 7rem);
    /* margin: 0rem 7rem 0rem 5rem; */
    z-index: 1 !important;
  }
  button.slick-next:before {
    font-size: clamp(0.5rem, 8vh, 4rem) !important;
    color: #e2a48e !important;
  }
  button.slick-prev:before {
    font-size: clamp(0.5rem, 8vh, 4rem) !important;
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
`

const Slide = styled(motion.div)`
  background: rgba(255, 255, 255, 0.4);
  height: clamp(60vh, 70vh, 80vh);
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  position: relative;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 2.5rem;
  position: relative;
  a:visited {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 834px) {
    flex-direction: column;
    justify-content: center;
  }
`

const InnerSlide = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  @media (max-width: 834px) {
    flex-direction: column;
    justify-content: center;
  }
`

const ProjectPresentation = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 2;
  h1 {
    font-size: clamp(1rem, 3vw, 4rem);
  }
  p {
    margin-top: 2rem;
    margin-right: 4rem;
    font-size: clamp(0.1rem, 1.2vw, 2.2rem);
    text-align: justify;
    line-height: clamp(1rem, 3vw, 3rem);
  }

  @media (max-width: 834px) {
    flex-direction: column;
    p {
      margin-right: 0rem;
    }
  }
  @media (max-width: 667px) {
    p {
      display: none;
    }
  }
`

const KickAcePicture = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 40%;
  img {
    width: clamp(15rem, 30vw, 30rem);
    height: 100%;
    object-fit: contain;
  }
`

const KickAceDescription = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 834px) {
    justify-content: center;
    align-items: center;
  }
`

const CodeLink = styled(motion.div)`
  z-index: 2;
  a {
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
`

const Stack = styled(motion.div)`
  display: flex;
  img {
    width: clamp(1rem, 2vw, 3rem);
    height: 100%;
    object-fit: contain;
    margin: clamp(0.5rem, 1vw, 1rem);
  }
  @media (max-width: 667px) {
    display: none;
  }
`

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
`

const GamePresentation = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 834px) {
    justify-content: center;
    align-items: center;
  }
`

const Contact = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: clamp(0.2rem, 3vw, 6rem);
  button {
    font-size: clamp(1rem, 1.5vw, 4rem);
    padding: clamp(1rem, 2vw, 1rem);
    cursor: pointer;
    border-radius: 20px;
    background: #e2a48e;
    color: white;
    border: none;
  }
`

export default Projects
