import React, { useContext } from 'react'

import images from '../../../../../assets/images'
import { DataContext } from '../../../../../context/data'

import {
  Container,
  Content,
  Image,
  TextPrincipal,
  BlockText,
} from './who_we_some_styles'

type MainProps = {
  id?: string
}

export const Main: React.FC<MainProps> = ({ id }) => {
  const {
    body: {
      farme_box: { initial },
    },
  } = useContext(DataContext)

  return (
    <Container id={id}>
      <Content>
        <BlockText>
          <TextPrincipal dangerouslySetInnerHTML={{ __html: initial.title }} />
        </BlockText>
        <Image src={images.ImageCoverFameBox} />
      </Content>
    </Container>
  )
}
