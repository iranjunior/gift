import React from 'react'
import { Footer, Menu, Nav } from '../../components'
import { CustomerBody } from './body'
import { Body, Container } from './farme_box_styles'

export const FarMeBox = () => (
  <Container>
    <Nav />
    <Body>
      <Menu />
      <CustomerBody.Main id="quem-somos" />
      <CustomerBody.Arguments id="argumentos" />
      <CustomerBody.KnowMe id="conheca-nos" />
      <CustomerBody.Reasons id="razoes" />
      <CustomerBody.FarMeBox id="farme-box" />
      <CustomerBody.PharmaceuticalAnalysis id="analise-farmaceutica" />
      <CustomerBody.Doubt id="duvidas-frequentes" />
      <CustomerBody.Banner id="banner" />
      <CustomerBody.Testimonies id="depoimentos" />
      <Footer id="sobre" />
    </Body>
  </Container>
)
