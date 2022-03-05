import React from 'react'

import {
  Container,
  Subtitle,
  Title,
  BlockText,
  Highlight,
  Text,
} from './header_styles'

type HeaderProps = {
  description: string
  title: string
  full?: boolean
}
type HeaderCenteredProps = {
  subtitle?: string
  title: string
}

export const Header: React.FC<HeaderProps> = ({ description, title, full }) => (
  <Container>
    <Subtitle>{description}</Subtitle>
    <Title full={full} dangerouslySetInnerHTML={{ __html: title }} />
  </Container>
)

export const HeaderCentered: React.FC<HeaderCenteredProps> = ({
  subtitle,
  title,
}) => (
  <BlockText>
    <Highlight dangerouslySetInnerHTML={{ __html: title }} />
    {subtitle ? <Text dangerouslySetInnerHTML={{ __html: subtitle }} /> : null}
  </BlockText>
)
