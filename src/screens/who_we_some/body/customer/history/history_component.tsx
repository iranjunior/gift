import React, { useContext } from 'react'

import { DataContext } from '../../../../../context/data'

import {
  Container,
  Content,
  Text,
  BlockText,
  TextPrincipal,
} from './history_styles'

type HistoryProps = {
  id?: string
}

export const History: React.FC<HistoryProps> = ({ id }) => {
  const {
    body: {
      who_we_are: { history },
    },
  } = useContext(DataContext)

  return (
    <Container id={id}>
      <Content>
        <BlockText>
          <TextPrincipal dangerouslySetInnerHTML={{ __html: history.title }} />
          <Text dangerouslySetInnerHTML={{ __html: history.subtitle }} />
        </BlockText>
      </Content>
    </Container>
  )
}
