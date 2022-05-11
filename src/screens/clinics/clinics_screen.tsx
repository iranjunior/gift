import React, { useContext, useLayoutEffect } from 'react'
import { CallToAction, Footer, Menu, Testimonies } from '../../components'
import { SubjectContext } from '../../context/subject'
import { Subject } from '../../context/subject/subject'
import { Main, Arguments, Topics, Banner } from './body'
import { Body, Container } from './clinics_styles'

export const Clinics = () => {
  const { setSubject } = useContext(SubjectContext)
  useLayoutEffect(() => {
    setSubject(Subject.doctors)
  }, [])

  return (
    <Container>
      <Body>
        <Menu />
        <Main id="apresentacao" />
        <Arguments id="argumentos" />
        <Topics id="topicos" />
        <Testimonies id="depoimentos" />
        <Banner id="banner" />
        <Footer id="sobre" />
        <CallToAction />
      </Body>
    </Container>
  )
}
