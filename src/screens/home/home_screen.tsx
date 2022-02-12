import React from 'react'
import {
  FarMeBox,
  KnowMe,
  Main,
  Menu,
  Nav,
  Numbers,
  Targets,
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
    </Body>
  </Container>
)
