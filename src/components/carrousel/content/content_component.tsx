import React from 'react'

import {
  Container,
  LeftSide,
  Text,
  ActionWrap,
  RequestOrderButton,
  RequestOrderLink,
  RightSide,
  Image,
} from './content_styles'

export type CarouselContentProps = {
  title: string
  image: string
}

export const CarouselContent: React.FC<CarouselContentProps> = ({
  title,
  image,
}) => (
  <Container>
    <LeftSide>
      <Text dangerouslySetInnerHTML={{ __html: title }} />
      <ActionWrap>
        <RequestOrderButton>Faça o seu orçamento</RequestOrderButton>
        <RequestOrderLink>sem compromisso</RequestOrderLink>
      </ActionWrap>
    </LeftSide>
    <RightSide>
      <Image src={image} />
    </RightSide>
  </Container>
)
