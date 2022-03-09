import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../ds'

import LogoFarMe from '../../assets/images/logotype.svg'
import { DataContext } from '../../context/data'
import { ButtonRequestQuote as ButtonRequestQuoteType } from '../../context/data/types'

import {
  Container,
  Link,
  Logo,
  Option,
  Options,
  OptionsContainer,
} from './menu_styles'

type MenuItemType = {
  label: string
  href: string
  context?: string
}

export const Menu = () => {
  const { menu } = useContext(DataContext)
  const navigate = useNavigate()

  return (
    <Container>
      <Logo src={LogoFarMe} />

      <Options>
        <OptionsContainer>
          {Object.entries(menu)
            .slice(0, Object.entries(menu).length - 1)
            .map(([, value]: [string, MenuItemType]) => (
              <Option key={value.href}>
                <Link href={value.href} onClick={() => navigate(value.href)}>
                  {value.label}
                </Link>
              </Option>
            ))}
        </OptionsContainer>
        <Button
          label={
            (
              Object.entries(menu).slice(
                Object.entries(menu).length - 1,
                Object.entries(menu).length
              )[0][1] as unknown as ButtonRequestQuoteType
            )?.label || ''
          }
        />
      </Options>
    </Container>
  )
}
