import React from 'react'
import { Container, Header, Content, Subtitle, Title } from './doubt_styles'

type DoubtProps = {
  id?: string
}

export const Doubt: React.FC<DoubtProps> = ({ id }) => {
  return (
    <Container id={id}>
      <Header>
        <Subtitle>Dúvidas</Subtitle>
        <Title>Dúvidas frequentes</Title>
      </Header>
      <Content></Content>
    </Container>
  )
}
