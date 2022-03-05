import React, { useContext } from 'react'

import images from '../../../../../assets/images'
import { DataContext } from '../../../../../context/data'

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
}

export const Main: React.FC<MainProps> = ({ id }) => {
  const {
    body: {
      home: {
        customers: { initial },
      },
    },
  } = useContext(DataContext)

  return (
    <Container id={id}>
      <Content>
        <BlockText>
          <TextPrincipal
            dangerouslySetInnerHTML={{ __html: initial['who-we-are'].title }}
          />
          <Text
            dangerouslySetInnerHTML={{ __html: initial['who-we-are'].subtitle }}
          ></Text>
        </BlockText>
        <Image src={images.ImageBoxWhoWeAre} />
      </Content>
    </Container>
  )
}
