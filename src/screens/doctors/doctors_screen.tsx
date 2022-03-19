import React, { useContext, useLayoutEffect } from 'react'
import {
  Footer,
  Menu,
  Nav,
  Numbers,
  Testimonies,
  Doubt,
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
      <Nav />
      <Body>
        <Menu />
        <Main id="quem-somos" />
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
