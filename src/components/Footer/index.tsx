import React from 'react'

import { AnimatedContainer, FooterSection, Wrapper } from './styles'

const Footer = () => {
  return (
    <AnimatedContainer>
      <FooterSection as="section">
        <Wrapper>
          <div>
            <h4>
              <a
                style={{
                  textDecoration: 'none',
                  color: '#fff'
                }}
                href="https://selprom.com.br"
              >
                Selprom Tecnologia
              </a>
            </h4>
            <span>&copy; {new Date().getFullYear()} - Todos os direitos reservados</span>
          </div>
          <div
            style={{
              marginTop: '55px'
            }}
          >
            <span style={{ fontSize: '8px' }}>
              Made by{' '}
              <a
                style={{
                  textDecoration: 'none',
                  color: '#fff'
                }}
                href="https://github.com/pedrolcsf"
              >
                Pedro Ferreira
              </a>{' '}
              📌
            </span>
          </div>
        </Wrapper>
      </FooterSection>
    </AnimatedContainer>
  )
}

export default Footer
