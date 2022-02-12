import React from 'react'

import BoxImage from '../../../../assets/box-direction-center.png'

import {
  Container,
  LeftSide,
  Text,
  ActionWrap,
  RequestOrderButton,
  RequestOrderLink,
  RightSide,
  Image,
} from './organized_styles'

export const OrganizedContent = () => (
  <Container>
    <LeftSide>
      <Text>Com separação por dia, horário e dose.</Text>
      <ActionWrap>
        <RequestOrderButton>Faça o seu orçamento</RequestOrderButton>
        <RequestOrderLink>sem compromisso</RequestOrderLink>
      </ActionWrap>
    </LeftSide>
    <RightSide>
      <Image src={BoxImage} />
    </RightSide>
  </Container>
)
