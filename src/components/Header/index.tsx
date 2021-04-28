// Native libraries
import React, { memo } from 'react'
// Important files
import AccountDropdown from './AccountDropdown'

// Styles
import {
  AnimatedContainer,
  Wrapper,
  AnimatedLeftNav,
  AnimatedRightNav,
  ContentLogo
} from './styles'

const Header = () => {
  return (
    <AnimatedContainer>
      <Wrapper>
        <AnimatedLeftNav>
          <ContentLogo href="/">
            <img src="/logo.svg" alt="" />
          </ContentLogo>
        </AnimatedLeftNav>

        <AnimatedRightNav>
          <AccountDropdown />
        </AnimatedRightNav>
      </Wrapper>
    </AnimatedContainer>
  )
}

export default memo(Header)
