import React from 'react'
//Import Components
import Presentation from '../components/Presentation'
//Styled
import styled from 'styled-components'
import { motion } from 'framer-motion'

const LandingPage = () => {
  return (
    <FirstPage className="firstPage">
      <Presentation />
    </FirstPage>
  )
}

const FirstPage = styled(motion.div)`
  overflow-y: hidden;
  height: 85vh;
  position: relative;
`

export default LandingPage
