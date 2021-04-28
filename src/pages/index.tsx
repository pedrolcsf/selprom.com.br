import React from 'react'
import Head from 'next/head'

import Particles from 'react-particles-js'
import particlesConfig from '../config/configParticles'

import {
  Container,
  Content,
  ContentButton,
  ReadMoreButton,
  ContactButton,
  Services,
  ServicesContent,
  About,
  AboutContent,
  More,
  Contact,
  ContactContent,
  Service,
  ServiceContent,
  SendMessage,
  SendMessageButton
} from '../styles/pages/Home'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Head>
          <title>Selprom Tecnologia</title>
        </Head>

        <Header />
        <Content>
          <h1>
            Em nossas atividades consideramos a gestão de qualidade um valor a
            ser cativado e aprimorado, como parte de nossa cultura.
          </h1>
          <ContentButton>
            <ContactButton href="#contact">Entrar em contato</ContactButton>
            <ReadMoreButton href="#about">Ler mais</ReadMoreButton>
          </ContentButton>
        </Content>

        <Services id="services">
          <ServicesContent>
            <h2>Serviços</h2>
            <ServiceContent>
              <Service>
                <h3>Rede Semafórica</h3>
              </Service>

              <Service>
                <h3>Iluminação Pública</h3>
              </Service>

              <Service>
                <h3>Botoeiras Inteligentes</h3>
              </Service>
            </ServiceContent>
          </ServicesContent>
        </Services>
        <div style={{ position: 'absolute', opacity: 0.5 }}>
          <Particles height="80vh" width="100vw" params={particlesConfig} />
        </div>
        <About id="about">
          <AboutContent>
            <h2>Quem Somos?</h2>
            <p>
              A Selprom Tecnologia LTDA, em nossas atividades consideramos a
              gestão de qualidade um valor a ser cativado e aprimorado como
              parte de nossa cultura, e desta forma assumimos as seguintes
              premissas e diretrizes.
            </p>

            <More>
              <div>
                <p>
                  Revisar, atualizar e adequar periodicamente seus processos com
                  soluções tecnológicas e economicamente viáveis, buscando a
                  melhoria continua; bem como assegurar a satisfação do cliente.
                </p>
              </div>
              <div>
                <p>
                  Influenciar seus fornecedores e prestadores de serviço que
                  realizam suas atividades com base nessas premissas e
                  diretrizes.
                </p>
              </div>
            </More>
          </AboutContent>
        </About>
        <Contact id="contact">
          <ContactContent>
            <h2>Contato</h2>

            <span>
              <strong>E-mail:</strong>selprom@hotmail.com
            </span>

            <span className="phone">
              <strong>Telefone:</strong>(65) 3029-2200
            </span>

            <p>Quer conversar? Envie uma mensagem.</p>
            <form action="">
              <input placeholder="Nome" type="text" name="" id="" />
              <input placeholder="E-mail" type="text" name="" id="" />
              <textarea placeholder="Mensagem" name="" id=""></textarea>
              <SendMessage>
                <SendMessageButton>Enviar</SendMessageButton>
              </SendMessage>
            </form>
          </ContactContent>
        </Contact>
        <Footer />
      </Container>
    </>
  )
}

export default Home
