import React, { useContext, useLayoutEffect } from 'react'
import { CallToAction, Doubt, Footer, Menu, Numbers } from '../../components'
import { SubjectContext } from '../../context/subject'
import { Subject } from '../../context/subject/subject'
import { Main, FarMeBox, KnowMe, Targets, Testimonies } from './body'

import { Body, Container } from './home_styles'

export const Home = () => {
  const { setSubject } = useContext(SubjectContext)
  useLayoutEffect(() => {
    setSubject(Subject.customer)
  }, [])

  return (
    <Container>
      <Body>
        <Menu />
        <Main id="quem-somos" />
        <FarMeBox id="farme-box" />
        <KnowMe id="conheca-nos" />
        <Targets id="objetivos" />
        <Numbers id="nossos-numeros" />
        <Testimonies id="depoimentos" />
        <Doubt id="duvidas-frequentes" />
        <Footer id="sobre" />
        {/* <CallToAction /> */}
      </Body>
    </Container>
  )
}
