import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { useLocation } from "react-router-dom";

const Nav = () => {
  // const { pathname } = useLocation();
  return (
    <StyledNav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Mes Projets</a>
        </li>
        <li>
          <a href="#">A Propos</a>
        </li>
        <li>
          <a href="#">Mes Compétences</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 8vh;
  /* background: #282828; */
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: black;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 20rem;
  }

  li {
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem;
    ul {
      padding: 2rem;
      justify-content: center;
      width: 100%;
    }
    li {
      padding: 0rem 2rem;
      justify-content: center;
    }
    #logo {
      display: inline-block;
      margin: 1rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  @media (max-width: 1300px) {
    left: 2rem;
  }
`;

export default Nav;
