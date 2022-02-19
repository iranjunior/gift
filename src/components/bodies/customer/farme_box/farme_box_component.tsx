import React, { useContext } from 'react'

import { DataContext } from '../../../../context/data'
import videos from '../../../../assets/videos'

import { Container, Content, Text, Video } from './farme_box_styles'

type FarMeBoxProps = {
  id?: string
}

export const FarMeBox: React.FC<FarMeBoxProps> = ({ id }) => {
  const {
    body: { farme_box },
  } = useContext(DataContext)
  return (
    <Container id={id}>
      <Content>
        <Text dangerouslySetInnerHTML={{ __html: farme_box.title }} />

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
