import React, { useContext } from 'react'
import { DataContext } from '../../context/data'
import DirectMe from '../../assets/images/indica_me.svg'

import { CloseButton, Container, Content, Logo, Text } from './navbanner_styles'
import { useSession } from '../../hooks/useSession'
import { addingCurrentQueryParams } from '../helpers/url_parser'

export const NavBanner = () => {
  const {
    navbanner: { text, href },
  } = useContext(DataContext)
  const [shouldShowBanner, setShouldShowBanner] = useSession()
  return (
    <Container show={shouldShowBanner.keeping_open}>
      <Content>
        <Logo src={DirectMe} />
        <Text
          dangerouslySetInnerHTML={{
            __html: text.replace(
              '<a>',
              `<a href="${addingCurrentQueryParams(href)}" >`
            ),
          }}
        />
      </Content>
      <CloseButton
        onClick={() =>
          setShouldShowBanner((prev) => ({ ...prev, keeping_open: false }))
        }
      >
        X
      </CloseButton>
    </Container>
  )
}
