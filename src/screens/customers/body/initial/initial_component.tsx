import React, { useContext, useRef } from 'react'

import images from '../../../../assets/images'
import { DataContext } from '../../../../context/data'
import { useIntersection } from '../../../../hooks/useIntersection'

import {
  Container,
  Content,
  Text,
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
      for_customers: { initial },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <Content>
        <BlockText>
          <TextPrincipal dangerouslySetInnerHTML={{ __html: initial.title }} />
          <Text dangerouslySetInnerHTML={{ __html: initial.subtitle }}></Text>
        </BlockText>
        <Image src={images.ImageBoxPointingLeft} />
      </Content>
    </Container>
  )
}