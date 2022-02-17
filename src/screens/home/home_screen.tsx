import React from 'react'
import {
  Doubt,
  FarMeBox,
  Footer,
  KnowMe,
  Main,
  Menu,
  Nav,
  Numbers,
  Targets,
  Testimonies,
} from '../../components'

import { Body, Container } from './home_styles'

export const Home = () => (
  <Container>
    <Nav />
    <Body>
      <Menu />
      <Main id="quem-somos" />
      <FarMeBox id="farme-box" />
      <KnowMe id="conheca-me" />
      <Targets id="objetivos" />
      <Numbers id="numeros" />
      <Testimonies id="testimonies" />
      <Doubt id="duvidas" />
      <Footer id="sobre" />
    </Body>
  </Container>
)
