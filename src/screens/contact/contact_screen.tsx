import React, { useContext, useLayoutEffect } from 'react'
import { Menu } from '../../components'
import { SubjectContext } from '../../context/subject'
import { Subject } from '../../context/subject/subject'
import { ContentForLeads, ContentForCustomers } from './body'

import { Body, Container } from './contact_styles'

const Contact: React.FC = ({ children }) => {
  const { setSubject } = useContext(SubjectContext)

  useLayoutEffect(() => {
    setSubject(Subject.customer)
  }, [])

  return (
    <Container>
      <Menu />
      <Body>{children}</Body>
    </Container>
  )
}

export const ContactForLeads = () => (
  <Contact>
    <ContentForLeads />
  </Contact>
)

export const ContactForCustomers = () => (
  <Contact>
    <ContentForCustomers />
  </Contact>
)
