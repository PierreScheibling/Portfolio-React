// Library import
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const WinningModal = () => {
  return (
    <WinningModalWP
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-100%' }}
    >
      <WinningModalInside>
        <TitleModal>
          <h2>Bravo !</h2>
        </TitleModal>

        <Contact>
          <p>Si vous souhaitez me contacter:</p>
          <a href="mailto=Romain@hamouma.com">Romain@hamouma.com</a>
        </Contact>
      </WinningModalInside>
    </WinningModalWP>
  )
}

const WinningModalWP = styled(motion.div)`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: left;
  border-radius: 0.3rem;
`

const TitleModal = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Signatura Monoline Script', sans-serif;
  font-size: 6rem;
`

const Contact = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  a {
    color: black;
    text-decoration: none;
  }
`
const WinningModalInside = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
`
