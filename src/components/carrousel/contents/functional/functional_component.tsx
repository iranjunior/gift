import React from 'react'

import BoxImage from '../../../../assets/box-direction-right.png'

import {
  Container,
  LeftSide,
  Text,
  ActionWrap,
  RequestOrderButton,
  RequestOrderLink,
  RightSide,
  Image,
} from './functional_styles'

export const FunctionalContent = () => (
  <Container>
    <LeftSide>
      <Text>Com as orientações para uso dos medicamentos.</Text>
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
