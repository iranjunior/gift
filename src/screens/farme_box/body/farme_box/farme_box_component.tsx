import React, { useContext, useRef } from 'react'

import { DataContext } from '../../../../context/data'
import videos from '../../../../assets/videos'

import { Container, Content, Video } from './farme_box_styles'
import { HeaderCentered } from '../../../../ds'
import { useIntersection } from '../../../../hooks/useIntersection'

type FarMeBoxProps = {
  id?: string
  className?: string
}

export const FarMeBox: React.FC<FarMeBoxProps> = ({ id }) => {
  const {
    body: {
      farme_box: { farme_box: pageFarmeBox },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <Content ref={ref}>
        <HeaderCentered title={pageFarmeBox.title} />

        <Video
          controls
          autoPlay
          typeof="video/mp4"
          src={videos.VideoFarMeBox}
        />
      </Content>
    </Container>
  )
}
