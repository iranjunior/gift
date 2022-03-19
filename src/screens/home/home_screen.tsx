import React from 'react'
import {
  Doubt,
  Footer,
  Menu,
  Nav,
  Numbers,
  Testimonies,
} from '../../components'
import { Main, FarMeBox, KnowMe, Targets } from './body'

import { Body, Container } from './home_styles'

export const Home = () => {
  return (
    <Container>
      <Nav />
      <Body>
        <Menu />
        <Main id="quem-somos" />
        <FarMeBox id="farme-box" />
        <KnowMe id="conheca-nos" />
        <Targets id="objetivos" />
        <Numbers id="nossos-numeros" />
        <Testimonies id="depoimentos" />
        <Doubt id="duvidas-frequentes" />
        <Footer id="sobre" />
      </Body>
    </Container>
  )
}
