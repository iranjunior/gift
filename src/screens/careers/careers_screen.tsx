import React from 'react'
import { Footer, Menu, Nav } from '../../components'
import { CustomerBody } from './body'
import { Body, Container } from './careers_styles'

export const Careers = () => (
  <Container>
    <Nav />
    <Body>
      <Menu />
      <CustomerBody.Main id="quem-somos" />
      <CustomerBody.Summary id="resumo" />
      <CustomerBody.Reasons id="razoes" />
      <CustomerBody.Values id="valores" />
      <CustomerBody.Testimonies id="depoimentos" />
      <CustomerBody.Banner id="banner" />
      <Footer id="sobre" />
    </Body>
  </Container>
)
