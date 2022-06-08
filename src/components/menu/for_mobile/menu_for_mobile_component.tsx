import React, { useContext, useState } from 'react'
import { Button } from '../../../ds'

import LogoFarMe from '../../../assets/images/logo_farme_without_spaces.svg'
import { ReactComponent as CloseIcon } from '../../../assets/images/close_icon.svg'
import { ReactComponent as HamburguerIcon } from '../../../assets/images/hamburger_icon.svg'
import { ReactComponent as ChevronIcon } from '../../../assets/images/chevron.svg'
import { ReactComponent as ArrowRightIcon } from '../../../assets/images/arrow_right.svg'
import { DataContext } from '../../../context/data'
import { Menu as MenuType } from '../../../context/data/types'

import {
  ButtonContainer,
  Container,
  ContainerBar,
  ContainerExpandedOptions,
  Content,
  ContentBar,
  HamburgerMenu,
  Link,
  Logo,
  Option,
  Options,
  OptionsMain,
} from './menu_for_mobile_styles'
import { MenuModal } from '../menu_modal'
import { NavBanner } from '../../navbanner'
import { addingCurrentQueryParams } from '../../helpers/url_parser'

type OptionMobile = {
  isExpansive: boolean
  label: string
  href?: string
}

type itensMobile = {
  subSectionActive: boolean
  options: OptionMobile[]
}

type MenuComponentProps = {
  wasScrolled?: boolean
}

const MenuForMobileComponent = ({ wasScrolled }: MenuComponentProps) => {
  const [showModal, setShowModal] = useState(false)
  const { menu_for_mobile: menu } = useContext(DataContext)
  const [itensMobile, setItensMobile] = useState<itensMobile>({
    subSectionActive: false,
    options: menu.slice(0, menu.length - 1).map(({ label, href, options }) => ({
      isExpansive: !!options,
      label,
      href,
    })),
  })

  const MenuIcon = () => {
    if (itensMobile.subSectionActive) {
      return <ChevronIcon />
    }
    return showModal ? <CloseIcon /> : <HamburguerIcon />
  }
  const lastItem = menu[menu.length - 1]

  const isCurrentPage = (item: MenuType) => {
    return item.href && location.pathname.includes(item.href)
  }

  return (
    <>
      <ContainerBar show={!showModal} fixed={!!wasScrolled}>
        <NavBanner />
        <ContentBar>
          <Logo
            onClick={() => window.open(addingCurrentQueryParams('/'), '_self')}
            src={LogoFarMe}
          />
          <HamburgerMenu
            onClick={() => {
              if (itensMobile.subSectionActive) {
                setItensMobile({
                  subSectionActive: false,
                  options: menu
                    .slice(0, menu.length - 1)
                    .map(({ label, href, options }) => ({
                      isExpansive: !!options,
                      label,
                      href,
                    })),
                })
              } else {
                setShowModal((prev) => !prev)
              }
            }}
          >
            <MenuIcon />
          </HamburgerMenu>
        </ContentBar>
      </ContainerBar>
      <MenuModal show={showModal}>
        {showModal && (
          <ContainerExpandedOptions>
            <ContainerBar show={showModal} fixed={false}>
              <NavBanner />
              <ContentBar>
                <Logo
                  onClick={() =>
                    window.open(addingCurrentQueryParams('/'), '_self')
                  }
                  src={LogoFarMe}
                />
                <HamburgerMenu
                  onClick={() => {
                    if (itensMobile.subSectionActive) {
                      setItensMobile({
                        subSectionActive: false,
                        options: menu
                          .slice(0, menu.length - 1)
                          .map(({ label, href, options }) => ({
                            isExpansive: !!options,
                            label,
                            href,
                          })),
                      })
                    } else {
                      setShowModal((prev) => !prev)
                    }
                  }}
                >
                  <MenuIcon />
                </HamburgerMenu>
              </ContentBar>
            </ContainerBar>
            <Container>
              {' '}
              <Content>
                <Options>
                  <OptionsMain>
                    {itensMobile.options.map((value, index) => (
                      <Option isExpanded={value.isExpansive} key={value.href}>
                        {value.isExpansive ? (
                          <Link
                            onClick={() =>
                              setItensMobile({
                                subSectionActive: true,
                                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                                options: menu[index]!.options!.map(
                                  ({ href, label }) => ({
                                    label,
                                    href,
                                    isExpansive: false,
                                  })
                                ),
                              })
                            }
                          >
                            {value.label} <ArrowRightIcon />
                          </Link>
                        ) : (
                          <Link
                            highlight={!!isCurrentPage(value)}
                            href={addingCurrentQueryParams(value.href || '')}
                          >
                            {value.label}
                          </Link>
                        )}
                      </Option>
                    ))}
                  </OptionsMain>
                  <ButtonContainer>
                    <Button
                      onClick={() =>
                        window.open(
                          addingCurrentQueryParams(
                            'https://app.farme.com.br/orcamento'
                          )
                        )
                      }
                      label={lastItem.label || ''}
                    />
                  </ButtonContainer>
                </Options>
              </Content>
            </Container>
          </ContainerExpandedOptions>
        )}
      </MenuModal>
    </>
  )
}

export const MenuForMobile = () => {
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
    return <MenuForMobileComponent wasScrolled />
  }
  return <MenuForMobileComponent />
}
