import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Burger from "../components/burger/burger.jsx";

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
            animate={{ width: pathname === "/" ? "40%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/projects">Mes Projets</Link>
          <Line
            transition={{ duration: 0.75 }}
            initials={{ width: "0%" }}
            animate={{ width: pathname === "/projects" ? "40%" : "0%" }}
          />
        </li>
        <li>
          <Burger />
        </li>
        <li>
          <Link to="/aboutme">A Propos</Link>
          <Line
            transition={{ duration: 0.75 }}
            initials={{ width: "0%" }}
            animate={{ width: pathname === "/aboutme" ? "40%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/competencies">Mes Compétences</Link>
          <Line
            transition={{ duration: 0.75 }}
            initials={{ width: "0%" }}
            animate={{ width: pathname === "/competencies" ? "40%" : "0%" }}
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    font-size: 1rem;
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 834px) {
    position: relative;
  }
  @media (max-width: 667px) {
    position: relative;
    ul {
      padding: 2rem 0rem;
    }
    li {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 359px) {
    position: relative;
    ul {
      padding: 1rem 0rem;
    }
    li {
      font-size: 0.7rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  background: #e2a48e;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 30%;
`;

export default Nav;
