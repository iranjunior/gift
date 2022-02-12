import React from 'react'

import HandWithDrugImage from '../../../../assets/hand-with-drug.png'

import {
  Container,
  LeftSide,
  Text,
  ActionWrap,
  RequestOrderButton,
  RequestOrderLink,
  RightSide,
  Image,
} from './safety_styles'

export const SafetyContent = () => (
  <Container>
    <LeftSide>
      <Text>
        Com informações de rastreabilidade e validade de cada medicamento.
      </Text>
      <ActionWrap>
        <RequestOrderButton>Faça o seu orçamento</RequestOrderButton>
        <RequestOrderLink>sem compromisso</RequestOrderLink>
      </ActionWrap>
    </LeftSide>
    <RightSide>
      <Image src={HandWithDrugImage} />
    </RightSide>
  </Container>
)
