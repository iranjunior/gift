import React, {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useLocation } from 'react-router-dom'
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
} from './menu_styles'
import { MenuForMobile } from './for_mobile/menu_for_mobile_component'
import { NavBanner } from '../navbanner'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { addingCurrentQueryParams } from '../helpers/url_parser'

type CTAType = {
  label: string
  href: string
  isCTA: boolean
}

type StateType = {
  activeSection?: string
}
type OpenCollapsibleType = {
  pages: {
    onHover: boolean
    onClick: boolean
  }
  contact: {
    onHover: boolean
    onClick: boolean
  }
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
  const [openCollapsible, setOpenCollapsible] = useState<OpenCollapsibleType>({
    pages: {
      onHover: false,
      onClick: false,
    },
    contact: {
      onHover: false,
      onClick: false,
    },
  })
  const { menu } = useContext(DataContext)
  const DropdownContainerPagesRef = useRef(null as unknown as HTMLDivElement)
  const DropdownContainerContactsRef = useRef(null as unknown as HTMLDivElement)
  const DropdownContentSegmentRef = useRef(null as unknown as HTMLDivElement)
  const DropdownContentContactRef = useRef(null as unknown as HTMLDivElement)
  const location = useLocation()

  const listRefs = [DropdownContentSegmentRef, DropdownContentContactRef]
  const listContainersRefs = [
    DropdownContainerPagesRef,
    DropdownContainerContactsRef,
  ]
  listContainersRefs.map((ref) =>
    useOutsideClick(ref, listRefs, () =>
      setOpenCollapsible((prev) => ({
        pages: {
          onHover: prev.pages.onHover,
          onClick: prev.pages.onClick ? false : prev.pages.onClick,
        },
        contact: {
          onHover: prev.contact.onHover,
          onClick: prev.contact.onClick ? false : prev.contact.onClick,
        },
      }))
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
    window.open(addingCurrentQueryParams(option.href), '_self')
  }
  const isNotDesktop = window.innerWidth < 1024

  if (isNotDesktop) {
    return <MenuForMobile />
  }
  const onClickDropdown = (isSanctionable: boolean, option: OptionType) => {
    if (isSanctionable) onClickOption(option)
    else {
      window.open(addingCurrentQueryParams(option.href), '_self')
    }
  }
  const updateOpenCollapsible = (
    key: 'pages' | 'contact',
    origin: 'click' | 'hover',
    action: boolean
  ) => {
    setOpenCollapsible((prev) => ({
      ...prev,
      [key]: {
        onHover: origin === 'hover' ? action : prev[key]?.onHover ?? false,
        onClick: origin === 'click' ? action : prev[key]?.onClick ?? false,
      },
    }))
  }

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      if (
        // verify if the mouse is inside the dropdown container
        (DropdownContainerPagesRef?.current.getBoundingClientRect().left <=
          event.x &&
          DropdownContainerPagesRef?.current.getBoundingClientRect().right >=
            event.x &&
          DropdownContainerPagesRef?.current.getBoundingClientRect().top <=
            event.y &&
          DropdownContainerPagesRef?.current.getBoundingClientRect().bottom +
            30 >=
            event.y) ||
        // verify if the mouse is inside the dropdown content
        (DropdownContentSegmentRef?.current.getBoundingClientRect().left <=
          event.x &&
          DropdownContentSegmentRef?.current.getBoundingClientRect().right >=
            event.x &&
          DropdownContentSegmentRef?.current.getBoundingClientRect().top <=
            event.y &&
          DropdownContentSegmentRef?.current.getBoundingClientRect().bottom >=
            event.y)
      ) {
        updateOpenCollapsible('pages', 'hover', true)
      } else {
        updateOpenCollapsible('pages', 'hover', false)
      }

      if (
        // verify if the mouse is inside the dropdown container
        (DropdownContainerContactsRef?.current.getBoundingClientRect().left <=
          event.x &&
          DropdownContainerContactsRef?.current.getBoundingClientRect().right >=
            event.x &&
          DropdownContainerContactsRef?.current.getBoundingClientRect().top <=
            event.y &&
          DropdownContainerContactsRef?.current.getBoundingClientRect().bottom +
            30 >=
            event.y) ||
        // verify if the mouse is inside the dropdown content
        (DropdownContentContactRef?.current.getBoundingClientRect().left <=
          event.x &&
          DropdownContentContactRef?.current.getBoundingClientRect().right >=
            event.x &&
          DropdownContentContactRef?.current.getBoundingClientRect().top <=
            event.y &&
          DropdownContentContactRef?.current.getBoundingClientRect().bottom >=
            event.y)
      ) {
        updateOpenCollapsible('contact', 'hover', true)
      } else {
        updateOpenCollapsible('contact', 'hover', false)
      }
    })
  }, [])
  return (
    <>
      <Container fixed={!!wasScrolled}>
        <NavBanner />
        <Content>
          <Logo
            onClick={() => window.open(addingCurrentQueryParams('/'), '_self')}
            src={LogoFarMe}
          />
          <Options>
            {menu.slice(0, menu.length - 1).map((value, index, menuList) => {
              const isSanctionable = value.options?.every(
                ({ isSanctionable }) => isSanctionable ?? false
              )
              const refContainer =
                listContainersRefs[index === menuList.length - 1 ? 1 : 0]
              return value.options ? (
                <DropdownContainer
                  className="collapsible"
                  key={value.label}
                  open={
                    Object.values(
                      refContainer === DropdownContainerPagesRef
                        ? openCollapsible['pages']
                        : openCollapsible['contact']
                    )?.some((e) => e === true) ?? false
                  }
                  onClick={() =>
                    updateOpenCollapsible(
                      refContainer === DropdownContainerPagesRef
                        ? 'pages'
                        : 'contact',
                      'click',
                      true
                    )
                  }
                  onMouseOver={() =>
                    updateOpenCollapsible(
                      refContainer === DropdownContainerPagesRef
                        ? 'pages'
                        : 'contact',
                      'hover',
                      true
                    )
                  }
                  ref={refContainer}
                >
                  <DropdownTitle
                    open={
                      Object.values(
                        refContainer === DropdownContainerPagesRef
                          ? openCollapsible['pages']
                          : openCollapsible['contact']
                      )?.some((e) => e === true) ?? false
                    }
                    highlight={!!activeSection && !!isSanctionable}
                    className="collapsible-title"
                  >
                    {isSanctionable
                      ? activeSection ?? value.label
                      : value.label}
                  </DropdownTitle>
                  <DropdownContent
                    open={
                      Object.values(
                        refContainer === DropdownContainerPagesRef
                          ? openCollapsible['pages']
                          : openCollapsible['contact']
                      )?.some((e) => e === true) ?? false
                    }
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
                  <Link
                    highlight={!!isCurrentPage(value)}
                    href={addingCurrentQueryParams(value.href || '')}
                    target={value.target}
                  >
                    {value.label}
                  </Link>
                </Option>
              )
            })}
          </Options>
          <Button
            onClick={() =>
              window.open(
                addingCurrentQueryParams('https://app.farme.com.br/orcamento')
              )
            }
            label={
              (
                Object.entries(menu).slice(
                  Object.entries(menu).length - 1,
                  Object.entries(menu).length
                )[0][1] as unknown as CTAType
              )?.label || ''
            }
          />
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
