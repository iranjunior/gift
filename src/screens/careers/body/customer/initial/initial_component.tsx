import React, { useContext } from 'react'

import IllustrationNotes from '../../../../../assets/images/illustration_notes.svg'
import { DataContext } from '../../../../../context/data'

import {
  Container,
  Content,
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
      careers: { initial },
    },
  } = useContext(DataContext)

  return (
    <Container id={id}>
      <Content>
        <BlockText>
          <TextPrincipal dangerouslySetInnerHTML={{ __html: initial.title }} />
        </BlockText>
        <Image src={IllustrationNotes} />
      </Content>
    </Container>
  )
}
