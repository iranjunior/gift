import React from 'react'
import { Footer, Menu, Nav } from '../../components'
import { CustomerBody } from './body'

import { Body, Container } from './home_styles'

export const Home = () => (
  <Container>
    <Nav />
    <Body>
      <Menu />
      <CustomerBody.Main id="quem-somos" />
      <CustomerBody.FarMeBox id="farme-box" />
      <CustomerBody.KnowMe id="conheca-me" />
      <CustomerBody.Targets id="objetivos" />
      <CustomerBody.Numbers id="numeros" />
      <CustomerBody.Testimonies id="testimonies" />
      <CustomerBody.Doubt id="duvidas" />
      <Footer id="sobre" />
    </Body>
  </Container>
)
