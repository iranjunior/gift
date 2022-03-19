import React, { useContext, useLayoutEffect } from 'react'
import { Footer, Menu, Nav, Doubt, Testimonies } from '../../components'
import { SubjectContext } from '../../context/subject'
import { Subject } from '../../context/subject/subject'
import {
  Main,
  Arguments,
  KnowMe,
  Reasons,
  FarMeBox as FarMeBoxComponent,
  PharmaceuticalAnalysis,
  Banner,
} from './body'
import { Body, Container } from './farme_box_styles'

export const FarMeBox = () => {
  const { setSubject } = useContext(SubjectContext)
  useLayoutEffect(() => {
    setSubject(Subject.customer)
  }, [])

  return (
    <Container>
      <Nav />
      <Body>
        <Menu />
        <Main id="quem-somos" />
        <Arguments id="argumentos" />
        <KnowMe id="conheca-nos" />
        <Reasons id="razoes" />
        <FarMeBoxComponent id="farme-box" />
        <PharmaceuticalAnalysis id="analise-farmaceutica" />
        <Doubt id="duvidas-frequentes" />
        <Banner id="banner" />
        <Testimonies id="depoimentos" />
        <Footer id="sobre" />
      </Body>
    </Container>
  )
}
