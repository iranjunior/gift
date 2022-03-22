import React, { useContext, useRef } from 'react'

import { DataContext } from '../../../../context/data'
import { useIntersection } from '../../../../hooks/useIntersection'

import {
  Container,
  Content,
  Text,
  BlockText,
  TextPrincipal,
} from './history_styles'

type HistoryProps = {
  id?: string
  className?: string
}

export const History: React.FC<HistoryProps> = ({ id }) => {
  const {
    body: {
      who_we_are: { history },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <Content>
        <BlockText>
          <TextPrincipal dangerouslySetInnerHTML={{ __html: history.title }} />
          <Text dangerouslySetInnerHTML={{ __html: history.subtitle }} />
        </BlockText>
      </Content>
    </Container>
  )
}
