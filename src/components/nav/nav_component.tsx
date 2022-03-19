import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/data'
import { SubjectContext } from '../../context/subject'
import { Subject } from '../../context/subject/subject'

import { Cell, Container, Link, Content } from './nav_styles'

export const Nav = () => {
  const data = useContext(DataContext)
  const { subject } = useContext(SubjectContext)
  const navigate = useNavigate()

  const _onClick = (value: string) => {
    console.log(value)
    if (value === 'customers') {
      navigate('/')
    } else if (value === 'companies') {
      navigate('/para-instituicoes')
    } else if (value === 'doctors') {
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
            onClick={!isActive(index) ? () => _onClick(subj) : () => null}
          >
            <Link active={isActive(index)}>{showText(value)}</Link>
          </Cell>
        ))}
      </Content>
    </Container>
  )
}
