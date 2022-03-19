import React, { useContext } from 'react'

import { DataContext } from '../../../../context/data'

import {
  Container,
  Content,
  Text,
  BlockText,
  TextPrincipal,
  Highlight,
} from './summary_styles'

type SummaryProps = {
  id?: string
}

export const Summary: React.FC<SummaryProps> = ({ id }) => {
  const {
    body: {
      careers: { summary },
    },
  } = useContext(DataContext)

  return (
    <Container id={id}>
      <Content>
        <BlockText>
          <TextPrincipal dangerouslySetInnerHTML={{ __html: summary.title }} />
          <Highlight dangerouslySetInnerHTML={{ __html: summary.highlight }} />
          <Text dangerouslySetInnerHTML={{ __html: summary.text }} />
        </BlockText>
      </Content>
    </Container>
  )
}
