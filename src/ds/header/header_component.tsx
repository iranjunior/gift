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
  legend?: string
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
  legend,
}) => (
  <BlockText>
    {legend ? <Subtitle dangerouslySetInnerHTML={{ __html: legend }} /> : null}
    <Highlight dangerouslySetInnerHTML={{ __html: title }} />
    {subtitle ? <Text dangerouslySetInnerHTML={{ __html: subtitle }} /> : null}
  </BlockText>
)
