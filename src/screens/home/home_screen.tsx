import React from 'react'
import { Main, Menu, Nav } from '../../components'

import { Body, Container } from './home_styles'

export const Home = () => (
  <Container>
    <Nav />
    <Body>
      <Menu />
      <Main />
    </Body>
  </Container>
)
