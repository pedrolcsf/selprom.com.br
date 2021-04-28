import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { motion } from 'framer-motion'

import { Wrapper as HeaderWrapper } from '../Header/styles'

export const AnimatedContainer = styled(motion.footer)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  transform-origin: bottom;
  padding-top: 8px;
`

export const Wrapper = styled(HeaderWrapper)`
  height: auto;
  padding-left: 32px;
  padding-right: 32px;
  margin-bottom: 20px;
  align-items: center;

  h4 {
    color: ${props => props.theme.colors.text};
    font-size: 14px;
  }

  span {
    display: block;
    font-size: 10px;
  }

  > img {
    margin-top: 1.6rem;
  }

  @media (max-width: 568px) {
    flex-direction: column;
    text-align: center;
  }
`

export const FooterSection = styled(AnimatedContainer)<{ background?: string }>`
  margin-top: 0;
`
