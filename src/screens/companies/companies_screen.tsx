import React, { useContext, useEffect, useLayoutEffect } from 'react'
import {
  Footer,
  Menu,
  Nav,
  Numbers,
  Doubt,
  Testimonies,
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
      <Nav />
      <Body>
        <Menu />
        <Main id="quem-somos" />
        <Advantage id="beneficios" />
        <HowWorking id="como-funciona" />
        <Banner id="banner" />
        <CardProduct id="farme-box" />
        <OurPosts id="nossos-posts" />
        <Numbers id="numeros" />
        <Testimonies id="testimonies" />
        <Doubt id="duvidas" />
        <Footer id="sobre" />
      </Body>
    </Container>
  )
}
