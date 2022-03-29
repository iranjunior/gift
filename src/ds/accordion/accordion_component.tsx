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
  <Container className="accordion" id={id} key={key}>
    <Title className="accordion-title">{title}</Title>
    <Answer
      className="accordion-body"
      dangerouslySetInnerHTML={{ __html: answer }}
    />
  </Container>
)
