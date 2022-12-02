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
          <Link to="/">Home</Link>
          <Line
            transition={{ duration: 0.75 }}
            initials={{ width: "0%" }}
            animate={{ width: "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/projects">Mes Projets</Link>
          <Line
            transition={{ duration: 0.75 }}
            initials={{ width: "0%" }}
            animate={{ width: "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/aboutme">A Propos</Link>
          <Line
            transition={{ duration: 0.75 }}
            initials={{ width: "0%" }}
            animate={{ width: "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/competencies">Mes Competences</Link>
          <Line
            transition={{ duration: 0.75 }}
            initials={{ width: "0%" }}
            animate={{ width: "/" ? "50%" : "0%" }}
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
  background: #e2a48e;
  width: 0%;
  position: absolute;
  @media (max-width: 1300px) {
    left: 2rem;
  }
`;

export default Nav;
