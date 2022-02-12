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
  { label: 'Quem Somos', to: '#quem-somos' },
  { label: 'Far.me Box', to: '#farme-box' },
  { label: 'Clínica', to: '#clinica' },
  { label: 'Carreiras', to: '#carreiras' },
  { label: 'Blog', to: '#blog' },
  { label: 'Contato', to: '#contato' },
]

export const Menu = () => {
  return (
    <Container>
      <Logo src={LogoFarMe} />

      <Options>
        {options.map((option) => (
          <Option key={option.to}>
            <Link href={option.to}>{option.label}</Link>
          </Option>
        ))}
        <RequestOrderButton>Faça seu orçamento</RequestOrderButton>
      </Options>
    </Container>
  )
}
