import React, { useContext, useLayoutEffect } from 'react'
import {
  Footer,
  Menu,
  Numbers,
  Doubt,
  Testimonies,
  CallToAction,
} from '../../components'
import { SubjectContext } from '../../context/subject'
import { Subject } from '../../context/subject/subject'
import {
  Main,
  Advantage,
  HowWorking,
  Banner,
  CardProduct,
  OurPosts,
} from './body'

import { Body, Container } from './companies_styles'

export const ForCompanies = () => {
  const { setSubject } = useContext(SubjectContext)
  useLayoutEffect(() => {
    setSubject(Subject.companies)
  }, [])

  return (
    <Container>
      <Body>
        <Menu />
        <Main id="quem-somos" />
        <Advantage id="beneficios" />
        <HowWorking id="como-funciona" />
        <Banner id="banner" />
        <CardProduct id="farme-box" />
        <OurPosts id="nossos-posts" />
        <Numbers id="numeros" />
        <Testimonies id="depoimentos" />
        <Doubt id="duvidas" />
        <Footer id="sobre" />
        <CallToAction />
      </Body>
    </Container>
  )
}
