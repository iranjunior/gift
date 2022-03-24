import React, { useContext, useRef } from 'react'

import IllustrationNotes from '../../../../assets/images/illustration_notes.svg'
import { DataContext } from '../../../../context/data'
import { useIntersection } from '../../../../hooks/useIntersection'

import {
  Container,
  Content,
  Image,
  TextPrincipal,
  BlockText,
} from './initial_styles'

type MainProps = {
  id?: string
  className?: string
}

export const Main: React.FC<MainProps> = ({ id }) => {
  const {
    body: {
      careers: { initial },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <Content ref={ref}>
        <BlockText>
          <TextPrincipal dangerouslySetInnerHTML={{ __html: initial.title }} />
        </BlockText>
        <Image src={IllustrationNotes} />
      </Content>
    </Container>
  )
}
