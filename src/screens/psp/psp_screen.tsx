import React, { useContext, useLayoutEffect } from 'react'
import { CallToAction, Footer, Menu, Nav, Testimonies } from '../../components'
import { SubjectContext } from '../../context/subject'
import { Subject } from '../../context/subject/subject'
import { Main, Arguments, HowWorking, Datas } from './body'
import { Body, Container } from './psp_styles'

export const PSP = () => {
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
        <Arguments id="argumentos" />
        <Datas id="dados" />
        <Testimonies id="depoimentos" />
        <Footer id="sobre" />
        <CallToAction />
      </Body>
    </Container>
  )
}
