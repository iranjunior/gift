import React from 'react'

import BoxImage from '../../../../assets/box-direction-left.png'

import {
  Container,
  LeftSide,
  Text,
  ActionWrap,
  RequestOrderButton,
  RequestOrderLink,
  RightSide,
  Image,
} from './custom_styles'

export const CustomContent = () => (
  <Container>
    <LeftSide>
      <Text>
        Uma caixa
        <br /> personalizada para a sua rotina.
      </Text>
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
