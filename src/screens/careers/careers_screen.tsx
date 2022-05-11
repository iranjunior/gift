import React, { useContext, useLayoutEffect } from 'react'
import { CallToAction, Footer, Menu, Testimonies } from '../../components'
import { SubjectContext } from '../../context/subject'
import { Subject } from '../../context/subject/subject'
import { Main, Summary, Reasons, Values, Banner } from './body'
import { Body, Container } from './careers_styles'

export const Careers = () => {
  const { setSubject } = useContext(SubjectContext)
  useLayoutEffect(() => {
    setSubject(Subject.customer)
  }, [])

  return (
    <Container>
      <Body>
        <Menu />
        <Main id="quem-somos" />
        <Summary id="resumo" />
        <Reasons id="razoes" />
        <Values id="valores" />
        <Testimonies id="depoimentos" />
        <Banner id="banner" />
        <Footer id="sobre" />
        <CallToAction />
      </Body>
    </Container>
  )
}
