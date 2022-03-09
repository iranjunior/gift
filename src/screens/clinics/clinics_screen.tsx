import React, { useContext, useEffect } from 'react'
import { Footer, Menu, Nav } from '../../components'
import { SubjectContext } from '../../context/subject'
import { Subject } from '../../context/subject/subject'
import { DoctorsBody } from './body'
import { Body, Container } from './clinics_styles'

export const Clinics = () => {
  const { setSubject } = useContext(SubjectContext)
  useEffect(() => {
    setSubject(Subject.doctors)
  }, [])

  return (
    <Container>
      <Nav />
      <Body>
        <Menu />
        <DoctorsBody.Main id="apresentacao" />
        <DoctorsBody.Arguments id="argumentos" />
        <DoctorsBody.Topics id="topicos" />
        <DoctorsBody.Testimonies id="depoimentos" />
        <DoctorsBody.Banner id="banner" />
        <Footer id="sobre" />
      </Body>
    </Container>
  )
}
