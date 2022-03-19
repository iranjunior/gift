import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/data'
import { SubjectContext } from '../../context/subject'
import { Subject } from '../../context/subject/subject'

import { Cell, Container, Link, Content } from './nav_styles'

export const Nav = () => {
  const data = useContext(DataContext)
  const { subject } = useContext(SubjectContext)
  const navigate = useNavigate()
  const location = useLocation()

  const _onClick = (value: string) => {
    if (value === 'customers' && location.pathname !== '/para-clientes') {
      navigate('/')
    } else if (
      value === 'companies' &&
      location.pathname !== '/para-instituicoes'
    ) {
      navigate('/para-instituicoes')
    } else if (value === 'doctors' && location.pathname !== '/para-medicos') {
      navigate('/para-medicos')
    }
  }

  const isActive = (index: number) => {
    if (subject === Subject.customer && index === 0) return true
    if (subject === Subject.companies && index === 1) return true
    if (subject === Subject.doctors && index === 2) return true
    return false
  }
  const isMobile = window.innerWidth < 768

  const showText = (value: string) => (isMobile ? value.split(' ')[1] : value)
  return (
    <Container>
      <Content>
        {Object.entries(data.nav).map(([subj, value], index) => (
          <Cell
            key={value}
            active={isActive(index)}
            onClick={() => _onClick(subj)}
          >
            <Link active={isActive(index)}>{showText(value)}</Link>
          </Cell>
        ))}
      </Content>
    </Container>
  )
}
