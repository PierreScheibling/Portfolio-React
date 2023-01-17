import React from "react";
//Styled
import styled from "styled-components";
import { motion } from "framer-motion";

const BlobPage = () => {
  return (
    <Blob>
      <div className="blob">
        <span className="shape"></span>
        <span className="shape"></span>
        <span className="shape"></span>
        <span className="shape"></span>
        <span className="shape"></span>
        <span className="shape"></span>
      </div>
    </Blob>
  );
};

//styles components
const Blob = styled(motion.div)`
  .blob {
    opacity: 0.5;
    position: fixed;
    top: 20%;
    left: 10%;
    width: 90%;
    height: 70%;
    z-index: -1;
  }
  .shape:nth-of-type(2) {
    width: clamp(13rem, 40vw, 25rem);
    height: clamp(13rem, 40vw, 25rem);
    background: #7998ff;
    position: absolute;
    top: -40%;
    left: -25%;
    opacity: 0.2;
    z-index: -1;
    animation: wave 5s ease-in-out infinite;
  }
  .shape:nth-of-type(3) {
    width: clamp(6rem, 30vw, 20rem);
    height: clamp(6rem, 30vw, 20rem);
    background: #379eff;
    position: absolute;
    bottom: -25%;
    right: -5%;
    opacity: 0.3;
    z-index: -1;
    animation: wave 7s ease-in-out infinite;
  }
  .shape:nth-of-type(4) {
    width: clamp(10rem, 25vw, 12rem);
    height: clamp(10rem, 25vw, 12rem);
    background: #fbff0d;
    position: absolute;
    bottom: -20%;
    left: 5%;
    opacity: 0.4;
    z-index: -1;
    animation: wave 3s ease-in-out infinite;
  }
  .shape:nth-of-type(5) {
    width: clamp(12rem, 45vw, 30rem);
    height: clamp(12rem, 45vw, 30rem);
    background: #ff4343;
    position: absolute;
    top: -15%;
    right: 10%;
    opacity: 0.2;
    z-index: -1;
    animation: wave 15s ease-in-out infinite;
  }

  @keyframes wave {
    0%,
    100% {
      border-radius: 66% 34% 37% 63% / 57% 31% 69% 43%;
    }
    50% {
      border-radius: 26% 74% 51% 49% / 22% 53% 47% 78%;
    }
  }

  /* @media (max-width: 1280px) {
    .shape:nth-of-type(2) {
      width: 600px;
      height: 600px;
    }
    .shape:nth-of-type(3) {
      width: 400px;
      height: 400px;
    }
    .shape:nth-of-type(4) {
      width: 200px;
      height: 200px;
      bottom: 170px;
      left: 50%;
    }
    .shape:nth-of-type(5) {
      width: 150px;
      height: 150px;
    }
  }
  @media (max-width: 820px) {
    .shape:nth-of-type(2) {
      width: 600px;
      height: 600px;
    }
    .shape:nth-of-type(3) {
      width: 400px;
      height: 400px;
    }
    .shape:nth-of-type(4) {
      width: 250px;
      height: 250px;
      bottom: 100px;
      left: 30%;
    }
    .shape:nth-of-type(5) {
      width: 150px;
      height: 150px;
    }
  }
  @media (max-width: 667px) {
    .shape:nth-of-type(2) {
      width: 500px;
      height: 450px;
    }
    .shape:nth-of-type(3) {
      width: 200px;
      height: 200px;
    }
    .shape:nth-of-type(4) {
      width: 80px;
      height: 80px;
      bottom: 70px;
    }
    .shape:nth-of-type(5) {
      width: 150px;
      height: 150px;
    }
  } */
`;

export default BlobPage;
