import React, { useContext } from 'react'

import { DataContext } from '../../../../../context/data'
import videos from '../../../../../assets/videos'

import { Container, Content, Video } from './farme_box_styles'
import { HeaderCentered } from '../../../../../ds'

type FarMeBoxProps = {
  id?: string
}

export const FarMeBox: React.FC<FarMeBoxProps> = ({ id }) => {
  const {
    body: {
      home: {
        customers: { farme_box: pageFarmeBox },
      },
    },
  } = useContext(DataContext)
  return (
    <Container id={id}>
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
