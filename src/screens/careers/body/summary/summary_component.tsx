import React, { useContext, useRef } from 'react'

import { DataContext } from '../../../../context/data'
import { useIntersection } from '../../../../hooks/useIntersection'

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
  className?: string
}

export const Summary: React.FC<SummaryProps> = ({ id }) => {
  const {
    body: {
      careers: { summary },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <Content ref={ref}>
        <BlockText>
          <TextPrincipal dangerouslySetInnerHTML={{ __html: summary.title }} />
          <Highlight dangerouslySetInnerHTML={{ __html: summary.highlight }} />
          <Text dangerouslySetInnerHTML={{ __html: summary.text }} />
        </BlockText>
      </Content>
    </Container>
  )
}
