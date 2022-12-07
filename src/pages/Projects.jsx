import React from "react";
//Styled
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Animations
import { pageAnimation, frameContainer, frameTransition } from "../Animations";
import Wave from "../components/Wave.jsx";

const Projects = () => {
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
    arrows: false,
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                unde aperiam ad vel placeat consectetur reprehenderit. Veritatis
                ipsa dolores earum totam et natus error. Totam impedit quasi
                voluptatum dolores neque.
              </p>
            </ProjectPresentation>
            <Wave />
          </Slide>
        </Project>
        <Project>
          <Slide>
            2
            <Wave />
          </Slide>
        </Project>
        <Project>
          <Slide>
            3
            <Wave />
          </Slide>
        </Project>
        <Project>
          <Slide>
            4
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
  margin-bottom: 3rem;
  border-radius: 3rem;
  position: relative;
  img {
    width: 90%;
  }
`;

const Picture = styled(motion.div)`
  z-index: 2;
`;

const ProjectPresentation = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-right: 8rem;
  width: 70%;
  z-index: 2;
  h1 {
    font-size: 3rem;
    margin-bottom: 4rem;
  }
  p {
    font-size: 1.5rem;
    text-align: justify;
    padding-top: 1rem;
    line-height: 3rem;
  }
`;

const Project = styled(motion.div)`
  margin-left: 10%;
  margin-top: 5rem;
`;

const ProjectsPage = styled(motion.div)``;

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

export default Projects;
