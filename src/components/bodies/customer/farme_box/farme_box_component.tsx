import React from 'react'

import VideoFarMe from '../../../../assets/video-depoiment.mp4'

import { Container, Content, Text, Video } from './farme_box_styles'

type FarMeBoxProps = {
  id?: string
}

export const FarMeBox: React.FC<FarMeBoxProps> = ({ id }) => (
  <Container id={id}>
    <Content>
      <Text>
        Viva o seu melhor estar, <br /> conte com a Far.me
      </Text>

      <Video controls autoPlay typeof="video/mp4" src={VideoFarMe} />
    </Content>
  </Container>
)
