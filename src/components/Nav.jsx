import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Line
            transition={{ duration: 0.75 }}
            initials={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/projects">Mes Projets</Link>
          <Line
            transition={{ duration: 0.75 }}
            initials={{ width: "0%" }}
            animate={{ width: pathname === "/projects" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/aboutme">A Propos</Link>
          <Line
            transition={{ duration: 0.75 }}
            initials={{ width: "0%" }}
            animate={{ width: pathname === "/aboutme" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/competencies">Mes Compétences</Link>
          <Line
            transition={{ duration: 0.75 }}
            initials={{ width: "0%" }}
            animate={{ width: pathname === "/competencies" ? "100%" : "0%" }}
          />
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
    justify-content: space-around;
    /* align-items: center; */
    padding: 3rem 1rem;
  }

  li {
    position: relative;
    font-size: 1rem;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  background: #e2a48e;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 0%;
`;

export default Nav;
