import React, { useContext, useLayoutEffect } from 'react'
import {
  Footer,
  Menu,
  Testimonies,
  Numbers,
  CallToAction,
} from '../../components'
import { SubjectContext } from '../../context/subject'
import { Subject } from '../../context/subject/subject'
import {
  Main,
  History,
  Declaration,
  Arguments,
  OurPeople,
  Banner,
  TestimoniesEmployee,
} from './body'
import { Body, Container } from './who_we_some_styles'

export const WhoWeSome = () => {
  const { setSubject } = useContext(SubjectContext)
  useLayoutEffect(() => {
    setSubject(Subject.customer)
  }, [])

  return (
    <Container>
      <Body>
        <Menu />
        <Main id="quem-somos" />
        <History id="historia" />
        <TestimoniesEmployee id="depoimentos" />
        <Declaration id="declaracao" />
        <Numbers id="numeros" />
        <Arguments id="argumentos" />
        <OurPeople id="nosso-especialistas" />
        <Banner id="banner" />
        <Footer id="sobre" />
        <CallToAction />
      </Body>
    </Container>
  )
}
