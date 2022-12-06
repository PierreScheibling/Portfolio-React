import React from "react";
//Styled
import styled from "styled-components";
import { motion } from "framer-motion";
import SimpleSlider from "../components/Carousel";

const Projects = () => {
  return (
    <ProjectsPage>
      <SimpleSlider />
    </ProjectsPage>
  );
};

const ProjectsPage = styled(motion.div)``;

export default Projects;
