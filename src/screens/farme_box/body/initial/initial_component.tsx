import React, { useContext, useRef } from 'react'

import videos from '../../../../assets/videos'
import { DataContext } from '../../../../context/data'
import { useIntersection } from '../../../../hooks/useIntersection'

import {
  Container,
  Content,
  Video,
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
      farme_box: { initial },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container id={id}>
      <Content ref={ref}>
        <BlockText>
          <TextPrincipal dangerouslySetInnerHTML={{ __html: initial.title }} />
        </BlockText>
        <Video autoPlay muted loop>
          <source src={videos.VideoInstitutionFarMeBox} type="video/mp4" />
        </Video>
      </Content>
    </Container>
  )
}
