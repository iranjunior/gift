import React from 'react'

import { Cell, Container, Link } from './nav_styles'

export const Nav = () => (
  <Container>
    <Cell active>
      <Link active>para clientes</Link>
    </Cell>
    <Cell>
      <Link>para instituições</Link>
    </Cell>
    <Cell>
      <Link>para medicos</Link>
    </Cell>
  </Container>
)
