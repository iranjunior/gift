import React, { useContext, useEffect, useRef } from 'react'

import videos from '../../../../assets/videos'
import { DataContext } from '../../../../context/data'
import { useIntersection } from '../../../../hooks/useIntersection'

import {
  Container,
  Content,
  Text,
  Video,
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
        <Video autoPlay muted loop>
          <source src={videos.VideoInstitutionFarMeBox} type="video/mp4" />
        </Video>
      </Content>
    </Container>
  )
}
