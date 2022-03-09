import React, { useContext } from 'react'

import images from '../../../../../assets/images'
import { DataContext } from '../../../../../context/data'

import {
  Container,
  Content,
  Image,
  TextPrincipal,
  Text,
  BlockText,
} from './initial_styles'

type MainProps = {
  id?: string
}

export const Main: React.FC<MainProps> = ({ id }) => {
  const {
    body: {
      clinics: { initial },
    },
  } = useContext(DataContext)

  return (
    <Container id={id}>
      <Content>
        <BlockText>
          <TextPrincipal dangerouslySetInnerHTML={{ __html: initial.title }} />
          <Text dangerouslySetInnerHTML={{ __html: initial.subtitle }} />
        </BlockText>
        <Image src={images.ImagePhoneAtHand} />
      </Content>
    </Container>
  )
}
