import React, { useContext, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../../ds'

import LogoFarMe from '../../assets/images/logotype.svg'
import { DataContext } from '../../context/data'
import {
  Option as OptionType,
  Menu as MenuType,
} from '../../context/data/types'

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
  OptionsContainer,
} from './menu_styles'
import { MenuForMobile } from './for_mobile/menu_for_mobile_component'
import { NavBanner } from '../navbanner'
import { useOutsideClick } from '../../hooks/useOutsideClick'

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

type MenuComponentProps = {
  wasScrolled?: boolean
}

const MenuComponent = ({ wasScrolled }: MenuComponentProps) => {
  const [openCollapsible, setOpenCollapsible] = useState<OpenCollapsibleType>(
    {}
  )
  const { menu } = useContext(DataContext)
  const DropdownContainerRef = useRef(null as unknown as HTMLDivElement)
  const DropdownContentSegmentRef = useRef(null as unknown as HTMLDivElement)
  const DropdownContentContactRef = useRef(null as unknown as HTMLDivElement)
  const location = useLocation()

  const listRefs = [DropdownContentSegmentRef, DropdownContentContactRef]
  useOutsideClick(DropdownContainerRef, listRefs, () =>
    setOpenCollapsible((prev) =>
      Object.fromEntries(Object.entries(prev).map(([key]) => [key, false]))
    )
  )
  const state = location.state as StateType
  const path = location.pathname

  const [activeSection] = useState(
    state?.activeSection || hashMapPathToActiveSection[path]
  )
  const isCurrentPage = (item: MenuType) => {
    return item.href && location.pathname.includes(item.href)
  }

  const onClickOption = (option: OptionType) => {
    window.open(option.href, '_self')
  }
  const isNotDesktop = window.innerWidth < 1024

  if (isNotDesktop) {
    return <MenuForMobile />
  }
  const onClickDropdown = (isSanctionable: boolean, option: OptionType) => {
    if (isSanctionable) onClickOption(option)
    else {
      window.open(option.href, '_self')
    }
  }
  const updateOpenCollapsible = (key: string, action?: boolean) => {
    setOpenCollapsible((prev) => ({
      ...prev,
      [key]: action || !prev[key],
    }))
  }

  return (
    <>
      <Container fixed={!!wasScrolled}>
        <NavBanner />
        <Content>
          <Logo onClick={() => window.open('/', '_self')} src={LogoFarMe} />
          <OptionsContainer>
            <Options>
              {menu.slice(0, menu.length - 1).map((value, index, menuList) => {
                const isSanctionable = value.options?.every(
                  ({ isSanctionable }) => isSanctionable ?? false
                )
                return value.options ? (
                  <DropdownContainer
                    className="collapsible"
                    key={value.label}
                    open={openCollapsible[value.label]}
                    onClick={() => updateOpenCollapsible(value.label)}
                    onMouseEnter={() =>
                      updateOpenCollapsible(value.label, true)
                    }
                    ref={DropdownContainerRef}
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
                    <DropdownContent
                      open={openCollapsible[value.label]}
                      ref={listRefs[index === menuList.length - 1 ? 1 : 0]}
                    >
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
                    <Link highlight={!!isCurrentPage(value)} href={value.href}>
                      {value.label}
                    </Link>
                  </Option>
                )
              })}
            </Options>
            <Button
              onClick={() => window.open('https://app.farme.com.br/orcamento')}
              label={
                (
                  Object.entries(menu).slice(
                    Object.entries(menu).length - 1,
                    Object.entries(menu).length
                  )[0][1] as unknown as CTAType
                )?.label || ''
              }
            />
          </OptionsContainer>
        </Content>
      </Container>
    </>
  )
}

export const Menu = () => {
  const scrolledCheck = () => window.scrollY > 51
  const [wasScrolled, setWasScrolled] = useState(scrolledCheck())
  window.addEventListener('scroll', () => {
    if (scrolledCheck() && !wasScrolled) {
      setWasScrolled(true)
    } else if (!scrolledCheck() && wasScrolled) {
      setWasScrolled(false)
    }
  })

  if (wasScrolled) {
    return <MenuComponent wasScrolled />
  }
  return <MenuComponent />
}
