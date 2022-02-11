import React from 'react'
import LogoFarMe from '../../assets/logotype.svg'
import {
  Container,
  Link,
  Logo,
  Option,
  Options,
  RequestOrderButton,
} from './menu_styles'

const options = [
  'Quem Somos',
  'Far.me Box',
  'Clínica',
  'Carreiras',
  'Blog',
  'Contato',
]

export const Menu = () => {
  return (
    <Container>
      <Logo src={LogoFarMe} />

      <Options>
        {options.map((option) => (
          <Option key={option}>
            <Link>{option}</Link>
          </Option>
        ))}
        <RequestOrderButton>Faça seu orçamento</RequestOrderButton>
      </Options>
    </Container>
  )
}
