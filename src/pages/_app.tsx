import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Particles from 'react-particles-js'
import particlesConfig from '../config/configParticles'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <div style={{ position: 'absolute', opacity: 0.5 }}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />

        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default MyApp
