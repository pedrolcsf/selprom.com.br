// Native libraries
import React, { useState, useCallback } from 'react'

// Form lib
import { Spin as Hamburger } from 'hamburger-react'

import { DROP_DOWN_ANIMATION } from './animations'

// Icons
import { FiHome, FiBox, FiInfo } from 'react-icons/fi'

// Styles
import { Container, AnimatedDropdown, NavButton } from './styles'

import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const AccountDropdown = () => {
  const router = useRouter()

  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const handleDropdownVisibility = useCallback(() => {
    setIsDropdownVisible(!isDropdownVisible)
  }, [isDropdownVisible])

  const handleGoToHome = e => {
    e.preventDefault()
    router.push('/')
  }

  const handleGoToServices = e => {
    e.preventDefault()
    router.push('#services')
  }

  const handleGoToAbout = e => {
    e.preventDefault()
    router.push('#about')
  }
  return (
    <>
      <Container>
        <Hamburger onToggle={handleDropdownVisibility} size={20} />

        <AnimatePresence>
          {isDropdownVisible && (
            <AnimatedDropdown
              variants={DROP_DOWN_ANIMATION}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <ul>
                <NavButton onClick={handleGoToHome}>
                  <FiHome />
                  Home
                </NavButton>
                <NavButton onClick={handleGoToServices}>
                  <FiBox />
                  Serviços
                </NavButton>
                <NavButton onClick={handleGoToAbout}>
                  <FiInfo />
                  Sobre
                </NavButton>
              </ul>
            </AnimatedDropdown>
          )}
        </AnimatePresence>
      </Container>
    </>
  )
}

export default AccountDropdown
