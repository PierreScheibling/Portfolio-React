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

  .shape:nth-of-type(1) {
    width: 400px;
    height: 400px;
    background: linear-gradient(64deg, #f34868 23%, #f24768 23%, #9e00ec 80%);
    animation: wave 8s ease-in-out infinite;
  }
  .shape:nth-of-type(2) {
    width: 800px;
    height: 800px;
    background: #7998ff;
    position: absolute;
    top: -200px;
    left: -400px;
    opacity: 0.2;
    z-index: -1;
    animation: wave 5s ease-in-out infinite;
  }
  .shape:nth-of-type(3) {
    width: 500px;
    height: 500px;
    background: #379eff;
    position: absolute;
    bottom: -25%;
    right: -5%;
    opacity: 0.3;
    z-index: -1;
    animation: wave 7s ease-in-out infinite;
  }
  .shape:nth-of-type(4) {
    width: 250px;
    height: 250px;
    background: #fbff0d;
    position: absolute;
    bottom: -120px;
    left: 50%;
    opacity: 0.4;
    z-index: -1;
    animation: wave 3s ease-in-out infinite;
  }
  .shape:nth-of-type(5) {
    width: 350px;
    height: 350px;
    background: #ff4343;
    position: absolute;
    top: -8%;
    right: 10%;
    opacity: 0.2;
    z-index: -1;
    animation: wave 15s ease-in-out infinite;
  }
  .shape:nth-of-type(6) {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 40%;
    right: 25%;
    opacity: 0.5;
    z-index: -1;
    transform: rotate(90deg);
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
`;

export default BlobPage;
