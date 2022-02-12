import React from 'react'
import ImageCard from '../../../assets/ilustration_medical.svg'
import {
  Container,
  Content,
  KnowMoreButton,
  Image,
  TextPrincipal,
  Highlight,
  Divisor,
  Text,
} from './medical_card_styles'

export const MedicalCard = () => (
  <Container>
    <Content>
      <Image src={ImageCard} />
      <TextPrincipal>
        Para
        <br />
        complementar
        <br />
        <TextPrincipal>
          {' '}
          o trabalho
          <Highlight> médico</Highlight>
        </TextPrincipal>
      </TextPrincipal>
      <Divisor />
      <Text>
        Facilidade na adesão ao tratamento no pós-consultório e, com isso,
        maiores chances de sucesso terapêutico.
      </Text>
      <KnowMoreButton>Saiba mais</KnowMoreButton>
    </Content>
  </Container>
)
