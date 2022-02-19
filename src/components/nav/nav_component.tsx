import React, { useContext } from 'react'
import { DataContext } from '../../context/data'

import { Cell, Container, Link } from './nav_styles'

export const Nav = () => {
  const data = useContext(DataContext)
  return (
    <Container>
      {Object.entries(data.nav).map(([, value], index) => (
        <Cell key={value} active={index == 0}>
          <Link active={index == 0}>{value}</Link>
        </Cell>
      ))}
    </Container>
  )
}
