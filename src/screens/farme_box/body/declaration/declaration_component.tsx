import React, { useContext, useRef } from 'react'

import { DataContext } from '../../../../context/data'
import { useIntersection } from '../../../../hooks/useIntersection'

import {
  Container,
  Content,
  Text,
  BlockText,
  TextPrincipal,
} from './declaration_styles'

type DeclarationProps = {
  id?: string
  className?: string
}

export const Declaration: React.FC<DeclarationProps> = ({ id }) => {
  const {
    body: {
      who_we_are: { declaration },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <Content ref={ref}>
        <BlockText>
          <TextPrincipal
            dangerouslySetInnerHTML={{ __html: declaration.title }}
          />
          <Text dangerouslySetInnerHTML={{ __html: declaration.declaration }} />
        </BlockText>
      </Content>
    </Container>
  )
}
