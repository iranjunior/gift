import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../../ds'

import LogoFarMe from '../../assets/images/logotype.svg'
import { DataContext } from '../../context/data'
import { Option as OptionType } from '../../context/data/types'

import {
  Container,
  Content,
  Link,
  Logo,
  DropdownContainer,
  DropdownItem,
  DropdownContent,
  DropdownTitle,
  DropdownItemLabel,
  Option,
  Options,
  Space,
} from './menu_styles'
import { MenuForMobile } from './for_mobile/menu_for_mobile_component'

type CTAType = {
  label: string
  href: string
  isCTA: boolean
}

type StateType = {
  activeSection?: string
}
type OpenCollapsibleType = {
  [key: string]: boolean
}
type HashMapPathToSection = {
  [key: string]: string
}
const hashMapPathToActiveSection: HashMapPathToSection = {
  '/para-medicos': 'Para médicos',
  '/para-instituicoes': 'Para instituições',
  '/para-clientes': 'Para você',
}

export const Menu = () => {
  const [openCollapsible, setOpenCollapsible] = useState<OpenCollapsibleType>(
    {}
  )
  const { menu } = useContext(DataContext)
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state as StateType
  const path = location.pathname

  const [activeSection] = useState(
    state?.activeSection || hashMapPathToActiveSection[path]
  )

  const onClickOption = (option: OptionType) => {
    navigate(option.href, { state: { activeSection: option.label } })
  }
  const isNotDesktop = window.innerWidth < 1024

  if (isNotDesktop) {
    return <MenuForMobile />
  }
  const onClickDropdown = (isSanctionable: boolean, option: OptionType) => {
    if (isSanctionable) onClickOption(option)
    else {
      updateOpenCollapsible(option.label)
      navigate(option.href)
    }
  }
  const updateOpenCollapsible = (key: string) =>
    setOpenCollapsible((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))

  return (
    <>
      <Container>
        <Content>
          <Logo onClick={() => navigate('/')} src={LogoFarMe} />
          <Space />
          <Options>
            {menu.slice(0, menu.length - 1).map((value) => {
              const isSanctionable = value.options?.every(
                ({ isSanctionable }) => isSanctionable ?? false
              )
              return value.options ? (
                <DropdownContainer
                  className="collapsible"
                  key={value.label}
                  onClick={() => updateOpenCollapsible(value.label)}
                >
                  <DropdownTitle
                    open={openCollapsible[value.label]}
                    highlight={!!activeSection && !!isSanctionable}
                    className="collapsible-title"
                  >
                    {isSanctionable
                      ? activeSection ?? value.label
                      : value.label}
                  </DropdownTitle>
                  <DropdownContent>
                    {value.options.map((option) => (
                      <DropdownItem
                        onClick={() =>
                          onClickDropdown(!!isSanctionable, option)
                        }
                        key={option.href}
                      >
                        <DropdownItemLabel>{option.label}</DropdownItemLabel>
                      </DropdownItem>
                    ))}
                  </DropdownContent>
                </DropdownContainer>
              ) : (
                <Option key={value.href}>
                  <Link href={value.href}>{value.label}</Link>
                </Option>
              )
            })}

            <Button
              label={
                (
                  Object.entries(menu).slice(
                    Object.entries(menu).length - 1,
                    Object.entries(menu).length
                  )[0][1] as unknown as CTAType
                )?.label || ''
              }
            />
          </Options>
        </Content>
      </Container>
    </>
  )
}
