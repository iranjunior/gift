import React from 'react'
import { Footer, Menu, Nav } from '../../components'
import { CustomerBody } from './body'
import { Body, Container } from './who_we_some_styles'

export const WhoWeSome = () => (
  <Container>
    <Nav />
    <Body>
      <Menu />
      <CustomerBody.Main id="quem-somos" />
      <CustomerBody.History id="historia" />
      <CustomerBody.Testimonies id="testimonies" />
      <CustomerBody.Declaration id="declaracao" />
      <CustomerBody.Numbers id="numeros" />
      <CustomerBody.Arguments id="argumentos" />
      <CustomerBody.OurPeople id="nosso-especialistas" />
      <CustomerBody.Banner id="banner" />
      <Footer id="sobre" />
    </Body>
  </Container>
)
