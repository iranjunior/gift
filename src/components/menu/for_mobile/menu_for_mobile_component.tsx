import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../ds'

import LogoFarMe from '../../../assets/images/logotype.svg'
import { ReactComponent as CloseIcon } from '../../../assets/images/close_icon.svg'
import { ReactComponent as HamburguerIcon } from '../../../assets/images/hamburger_icon.svg'
import { ReactComponent as ChevronIcon } from '../../../assets/images/chevron.svg'
import { ReactComponent as ArrowRightIcon } from '../../../assets/images/arrow_right.svg'
import { DataContext } from '../../../context/data'
import { Menu as MenuType } from '../../../context/data/types'

import {
  Container,
  ContainerBar,
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

type OptionMobile = {
  isExpansive: boolean
  label: string
  href?: string
}

type itensMobile = {
  subSectionActive: boolean
  options: OptionMobile[]
}

export const MenuForMobile = () => {
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
  const navigate = useNavigate()

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
      <ContainerBar>
        <ContentBar>
          <Logo onClick={() => navigate('/')} src={LogoFarMe} />
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
                          href={value.href}
                        >
                          {value.label}
                        </Link>
                      )}
                    </Option>
                  ))}
                </OptionsMain>
                <Button label={lastItem.label || ''} />
              </Options>
            </Content>
          </Container>
        )}
      </MenuModal>
    </>
  )
}
