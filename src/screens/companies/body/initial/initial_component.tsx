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
      for_companies: { initial },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <Content ref={ref}>
        <BlockText>
          <TextPrincipal
            dangerouslySetInnerHTML={{ __html: initial['who-we-are'].title }}
          />
          <Text
            dangerouslySetInnerHTML={{ __html: initial['who-we-are'].subtitle }}
          ></Text>
        </BlockText>
        <Image src={images.ImageMedicalCare} />
      </Content>
    </Container>
  )
}
