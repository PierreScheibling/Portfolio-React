import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const Nav = () => {
  const { pathname } = useLocation()
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
          <Line
            transition={{ duration: 0.75 }}
            initials={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '100%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/projects">Projets</Link>
          <Line
            transition={{ duration: 0.75 }}
            initials={{ width: '0%' }}
            animate={{ width: pathname === '/projects' ? '100%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/aboutme">A Propos</Link>
          <Line
            transition={{ duration: 0.75 }}
            initials={{ width: '0%' }}
            animate={{ width: pathname === '/aboutme' ? '100%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/competencies">Compétences</Link>
          <Line
            transition={{ duration: 0.75 }}
            initials={{ width: '0%' }}
            animate={{ width: pathname === '/competencies' ? '100%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.75 }}
            initials={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '100%' : '0%' }}
          />
        </li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  height: 15vh;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: black;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    width: 100%;
  }

  li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    font-size: clamp(0.8rem, 0.73rem + 0.3vw, 1rem);
  }
  // @media (max-width: 1727px) {
  //   li {
  //     font-size: 0.8rem;
  //   }
  // }

  // @media (max-width: 1280px) {
  // }
  // @media (max-width: 834px) {
  //   position: relative;
  // }
  // @media (max-width: 667px) {
  //   position: relative;
  //   ul {
  //     padding: 2rem 0rem;
  //   }
  //   li {
  //     font-size: 0.7rem;
  //   }
  // }
  // @media (max-width: 359px) {
  //   position: relative;
  //   ul {
  //     padding: 1rem 0rem;
  //   }
  //   li {
  //     font-size: 0.5rem;
  //   }
  // }
`

const Line = styled(motion.div)`
  height: 0.2rem;
  background: #e2a48e;
  width: 0%;
  position: absolute;
  bottom: -80%;
`

export default Nav
