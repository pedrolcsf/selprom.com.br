import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import Button from '../../../components/Button'
import { shade } from 'polished'

import Link from 'next/link'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  position: relative;
  cursor: pointer;

  > img {
    width: 60px;
    height: 60px;
  }
`

export const AnimatedDropdown = styled(motion.nav)`
  position: absolute;
  z-index: 10;
  top: 128%;
  right: 0;
  min-width: 14.6rem;
  border-radius: 4px;
  background: rgba(22, 33, 62, 0.8);
  box-shadow: 0 0.6rem 0.6rem rgba(0, 0, 0, 0.12);

  ::before {
    content: '';
    display: block;
    position: absolute;
    top: -18%;
    right: 11%;

    border-color: ${props =>
      `transparent transparent ${props.theme.colors.secondaryBackground} transparent`};
    border-style: solid;
    border-width: 0.8rem;
  }
`

export const NavButton = styled(Button)`
  width: 100%;
  padding: 1rem 1.6rem;
  justify-content: space-between;
  font-size: 13px;
  background: ${props => props.theme.colors.secondaryBackground};
  transition: background 0.2s;

  :hover {
    background: ${props => shade(0.2, props.theme.colors.secondaryBackground)};
    cursor: pointer;
  }

  :first-child {
    border-radius: 4px;
  }

  :last-child {
    border-radius: 4px;
  }
`
