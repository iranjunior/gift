import React, { useContext, useRef } from 'react'

import { HeaderCentered } from '../../../../ds'
import { DataContext } from '../../../../context/data'
import videos from '../../../../assets/videos'

import { Container, Content, Video } from './farme_box_styles'
import { useIntersection } from '../../../../hooks/useIntersection'

type FarMeBoxProps = {
  id?: string
  className?: string
}

export const FarMeBox: React.FC<FarMeBoxProps> = ({ id, ...props }) => {
  const ref = useRef(null as unknown as HTMLDivElement)
  const {
    body: {
      home: { farme_box: pageFarmeBox },
    },
  } = useContext(DataContext)
  useIntersection(ref, '100px', true)
  return (
    <Container ref={ref} {...props} id={id}>
      <Content>
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
