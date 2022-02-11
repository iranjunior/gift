import React from 'react'

import { Cell, Container, Link } from './nav_styles'

export const Nav = () => (
  <Container>
    <Cell active>
      <Link active>Para Clients</Link>
    </Cell>
    <Cell>
      <Link>Para Medicos</Link>
    </Cell>
    <Cell>
      <Link>Para Empresas</Link>
    </Cell>
  </Container>
)
