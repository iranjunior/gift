import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/data'
import { SubjectContext } from '../../context/subject'
import { Subject } from '../../context/subject/subject'
import DirectMe from '../../assets/images/indica_me.svg'

import { CloseButton, Container, Content, Logo, Text } from './navbanner_styles'
import { useSession } from '../../hooks/useSession'

export const NavBanner = () => {
  const {
    navbanner: { text },
  } = useContext(DataContext)
  const [shouldShowBanner, setShouldShowBanner] = useSession()
  return (
    <Container show={shouldShowBanner.keeping_open}>
      <Content>
        <Logo src={DirectMe} />
        <Text dangerouslySetInnerHTML={{ __html: text }} />
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
