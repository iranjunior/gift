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
import { Main, HowWorking, Banner, CardProduct, OurPosts } from './body'

import { Body, Container } from './doctors_styles'

export const ForDoctors = () => {
  const { setSubject } = useContext(SubjectContext)
  useLayoutEffect(() => {
    setSubject(Subject.doctors)
  }, [])
  return (
    <Container>
      <Body>
        <Menu />
        <Main id="quem-somos" />
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
