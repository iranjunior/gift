import React from 'react'

import { Carrousel } from '../../../carrousel'
import {
  Container,
  Content,
  BlockNumbers,
  BlockNumber,
  Highlight,
  Subtitle,
  Title,
  Number,
  SubtitleNumber,
  Message,
} from './numbers_styles'

type NumbersProps = {
  id?: string
}

export const Numbers: React.FC<NumbersProps> = ({ id }) => (
  <Container id={id}>
    <Content>
      <Subtitle>Números</Subtitle>
      <Title>
        Os impactos da Far.me levando o melhor estar para mais pessoas.{' '}
      </Title>
      <BlockNumbers>
        <BlockNumber>
          <Number>+70</Number>
          <SubtitleNumber>Colaboradores.</SubtitleNumber>
        </BlockNumber>
        <BlockNumber>
          <Number>+7.000</Number>
          <SubtitleNumber>Far.me Boxes produzidas.</SubtitleNumber>
        </BlockNumber>
        <BlockNumber>
          <Number>+3.000</Number>
          <SubtitleNumber>vidas impactadas.</SubtitleNumber>
        </BlockNumber>
      </BlockNumbers>
      <Message>
        Pode contar com a <Highlight>gente!</Highlight>
      </Message>
    </Content>
  </Container>
)
