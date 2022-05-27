import React, { useContext, useEffect, useRef } from 'react'

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

export const Main: React.FC<MainProps> = ({ id, ...props }) => {
  const ref = useRef(null as unknown as HTMLDivElement)
  const {
    body: {
      home: { initial },
    },
  } = useContext(DataContext)
  useIntersection(ref, '100px', true)

  return (
    <Container {...props} id={id}>
      <Content ref={ref}>
        <BlockText>
          <TextPrincipal dangerouslySetInnerHTML={{ __html: initial.title }} />
          <Text dangerouslySetInnerHTML={{ __html: initial.subtitle }}></Text>
        </BlockText>
        <Image src={images.ImageBoxPlusMao} />
      </Content>
    </Container>
  )
}
