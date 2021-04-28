import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AnimatedContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`

export const Wrapper = styled.div`
  max-width: 1200px;
  padding: 0 1.6rem;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`

export const AnimatedLeftNav = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  img {
    width: 180px;
  }

  font-size: 13px;
  font-weight: 700;
`

export const AnimatedRightNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  @media (max-width: 470px) {
    > button {
      display: none;
    }
  }
`

export const ContentLogo = styled.a`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    transition: opacity 0.2s;
  }

  &:hover {
    img {
      opacity: 0.8;
    }
  }
`

export const Navbar = styled.div`
  margin-right: 32px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    background: red;
    border-radius: 50%;
    text-decoration: none;
    color: black;
    transition: background 0.2s;

    &:hover {
      background: #222;
    }
  }
`
