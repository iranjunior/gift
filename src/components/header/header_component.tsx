import React from 'react'

import { Container, Subtitle, Title } from './header_styles'

type HeaderProps = {
  description: string
  title: string
}

export const Header: React.FC<HeaderProps> = ({ description, title }) => (
  <Container>
    <Subtitle>{description}</Subtitle>
    <Title dangerouslySetInnerHTML={{ __html: title }} />
  </Container>
)
