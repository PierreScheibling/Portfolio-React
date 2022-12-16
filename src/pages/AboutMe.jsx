import React from 'react'
import costard from '../img/costard.png'
//Styled
import styled from 'styled-components'
// Animations
import { delay, motion } from 'framer-motion'
import { pageAnimation } from '../Animations'
import { titleAnim } from '../Animations'
import { postAnim } from '../Animations'

const AboutMe = () => {
  const picture = {
    hidden: { scale: 1.2 },
    show: {
      scale: 1,
      transition: { duration: 1, ease: 'easeOut', delay: 1 },
    },
  }

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Apropos>
        {/* <Title>
          <h1>A Propos</h1>
        </Title> */}
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
              <motion.h2 variants={titleAnim}>Bio</motion.h2>
              <motion.p variants={postAnim}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores illum eaque tempore rem voluptatibus a magni quae cum
                officiis? Vel impedit excepturi fugiat nisi reprehenderit. Fuga,
                quas aspernatur blanditiis assumenda possimus eveniet nihil,
                sapiente atque nesciunt vitae perferendis maxime molestias
                voluptate sit id soluta laboriosam necessitatibus harum iure in?
                Ex.
              </motion.p>
            </Bio>
            <Experience>
              <motion.h2 variants={titleAnim}>Experiences</motion.h2>
              <XpLine variants={postAnim}>
                <div className="year">
                  <p>2022 - Aujourd'hui</p>
                </div>
                <div className="xp">
                  <p>Freelance Développeur Front-End</p>
                </div>
              </XpLine>
              <XpLine variants={postAnim}>
                <div className="year">
                  <p>2022</p>
                </div>
                <div className="xp">
                  <p>Formation en développement web - Le Wagon Bordeaux</p>
                </div>
              </XpLine>
              <XpLine variants={postAnim}>
                <div className="year">
                  <p>2016 - 2022</p>
                </div>
                <div className="xp">
                  <p>Consultant Senior en Recrutement</p>
                </div>
              </XpLine>
              <XpLine variants={postAnim}>
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
  )
}

const Apropos = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  p {
    line-height: 3rem;
  }
`

const Title = styled(motion.div)``

const Description = styled(motion.div)`
  display: flex;
  height: 70vh;
`

const Curriculum = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 70%;
  text-align: justify;
  margin: 1rem 6rem 3rem 5rem;
`

const Bio = styled(motion.div)`
  h2 {
    padding: 2rem 0rem;
  }
`

const Experience = styled(motion.div)`
  width: 100%;
  h2 {
    padding: 2rem 0rem;
  }
`

const XpLine = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .year {
    width: 20%;
  }
  .xp {
    display: flex;
    justify-content: flex-start;
    width: 80%;
  }
`

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
`

export default AboutMe
