import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../ds'

import LogoFarMe from '../../assets/images/logotype.svg'
import { ReactComponent as CloseIcon } from '../../assets/images/close_icon.svg'
import { ReactComponent as HamburguerIcon } from '../../assets/images/hamburger_icon.svg'
import { DataContext } from '../../context/data'
import { ButtonRequestQuote as ButtonRequestQuoteType } from '../../context/data/types'

import {
  Container,
  Content,
  HamburgerMenu,
  Link,
  Logo,
  LogoMobileContainer,
  Option,
  Options,
} from './menu_styles'
import { MenuModal } from './menu_modal'

type MenuItemType = {
  label: string
  href: string
  context?: string
}

export const Menu = () => {
  const [showModal, setShowModal] = useState(false)
  const { menu } = useContext(DataContext)
  const navigate = useNavigate()

  const MenuIcon = () => (showModal ? <CloseIcon /> : <HamburguerIcon />)

  return (
    <>
      <Container>
        <Content>
          <Logo onClick={() => navigate('/')} src={LogoFarMe} />

          <Options>
            {Object.entries(menu)
              .slice(0, Object.entries(menu).length - 1)
              .map(([, value]: [string, MenuItemType]) => (
                <Option key={value.href}>
                  <Link href={value.href} onClick={() => navigate(value.href)}>
                    {value.label}
                  </Link>
                </Option>
              ))}

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
          <HamburgerMenu
            onClick={() => {
              console.log('click')
              setShowModal((prev) => !prev)
            }}
          >
            <MenuIcon />
          </HamburgerMenu>
        </Content>
      </Container>
      <MenuModal show={showModal}>
        <Container isVertical>
          {' '}
          <Content isVertical>
            <Options showOptions isVertical>
              {Object.entries(menu)
                .slice(0, Object.entries(menu).length - 1)
                .map(([, value]: [string, MenuItemType]) => (
                  <Option key={value.href}>
                    <Link
                      href={value.href}
                      onClick={() => navigate(value.href)}
                    >
                      {value.label}
                    </Link>
                  </Option>
                ))}

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
          </Content>
        </Container>
      </MenuModal>
    </>
  )
}
