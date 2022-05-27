import React, { useContext, useLayoutEffect } from 'react'
import { Footer, Menu, Numbers, Doubt, CallToAction } from '../../components'
import { SubjectContext } from '../../context/subject'
import { Subject } from '../../context/subject/subject'
import {
  Main,
  Advantage,
  HowWorking,
  Banner,
  CardProduct,
  OurPosts,
  Arguments,
  TestimoniesEmployee,
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
        <HowWorking id="como-funciona" />
        <Advantage id="beneficios" />
        <CardProduct id="farme-box" />
        <Arguments id="argumentos" />
        <Banner id="banner" />
        <OurPosts id="nossos-posts" />
        <Numbers id="numeros" />
        <TestimoniesEmployee id="depoimentos" />
        <Doubt id="duvidas" />
        <Footer id="sobre" />
        <CallToAction />
      </Body>
    </Container>
  )
}
