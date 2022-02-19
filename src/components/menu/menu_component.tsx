import React, { useContext } from 'react'
import LogoFarMe from '../../assets/images/logotype.svg'
import { DataContext } from '../../context/data'
import {
  Blog as BlogType,
  ButtonRequestQuote as ButtonRequestQuoteType,
} from '../../context/data/types'
import {
  Container,
  Link,
  Logo,
  Option,
  Options,
  RequestOrderButton,
} from './menu_styles'

export const Menu = () => {
  const { menu } = useContext(DataContext)
  return (
    <Container>
      <Logo src={LogoFarMe} />

      <Options>
        {Object.entries(menu).map(
          (
            [, value]: [string, BlogType | ButtonRequestQuoteType],
            index,
            { length }
          ) => {
            if (index === length - 1)
              return <RequestOrderButton>{value.label}</RequestOrderButton>
            const option = value as BlogType
            return (
              <Option key={option.href}>
                <Link href={option.href}>{option.label}</Link>
              </Option>
            )
          }
        )}
      </Options>
    </Container>
  )
}
