import React, { useContext, useLayoutEffect } from 'react'
import {
  Footer,
  Menu,
  Numbers,
  Testimonies,
  Doubt,
  CallToAction,
} from '../../components'
import { SubjectContext } from '../../context/subject'
import { Subject } from '../../context/subject/subject'
import {
  Main,
  HowWorking,
  Banner,
  Advantage,
  CardProduct,
  OurPosts,
} from './body'

import { Body, Container } from './customers_styles'

export const ForCustomers = () => {
  const { setSubject } = useContext(SubjectContext)
  useLayoutEffect(() => {
    setSubject(Subject.customer)
  }, [])
  return (
    <Container>
      <Body>
        <Menu />
        <Main id="quem-somos" />
        <HowWorking id="como-funciona" />
        <Banner id="banner" />
        <Advantage id="beneficios" />
        <CardProduct id="cartao-do-produto" />
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
