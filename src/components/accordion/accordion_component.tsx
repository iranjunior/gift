import React from 'react'

import { Container, Answer, Title } from './accordion_styles'

type AccordionProps = {
  title: string
  answer: string
  id?: string
  key?: string
}

export const Accordion: React.FC<AccordionProps> = ({
  answer,
  title,
  id,
  key,
}) => (
  <Container id={id} key={key}>
    <Title>{title}</Title>
    <Answer dangerouslySetInnerHTML={{ __html: answer }} />
  </Container>
)
