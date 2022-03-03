import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer, Menu, Nav } from '../../components'
import { SubjectContext } from '../../context/subject'
import { Subject } from '../../context/subject/subject'
import { CustomerBody } from './body'

import { Body, Container } from './home_styles'

export const Home = () => {
  const { subject, setSubject } = useContext(SubjectContext)
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/') {
      setSubject(Subject.customer)
    }
    if (location.pathname.includes('para-instituicoes')) {
      setSubject(Subject.companies)
    }
    if (location.pathname.includes('para-medicos')) {
      setSubject(Subject.doctors)
    }
  }, [subject, location.pathname])
  return (
    <Container>
      <Nav />
      <Body>
        <Menu />
        <CustomerBody.Main id="quem-somos" />
        <CustomerBody.FarMeBox id="farme-box" />
        <CustomerBody.KnowMe id="conheca-me" />
        <CustomerBody.Targets id="objetivos" />
        <CustomerBody.Numbers id="numeros" />
        <CustomerBody.Testimonies id="testimonies" />
        <CustomerBody.Doubt id="duvidas" />
        <Footer id="sobre" />
      </Body>
    </Container>
  )
}
