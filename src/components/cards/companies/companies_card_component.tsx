import React from 'react'
import ImageCard from '../../../assets/ilustration_care.svg'

import {
  Container,
  Content,
  KnowMoreButton,
  Image,
  TextPrincipal,
  Highlight,
  Divisor,
  Text,
} from './companies_card_styles'

export const CompaniesCard = () => (
  <Container>
    <Content>
      <Image src={ImageCard} />
      <TextPrincipal>
        Para as
        <br />
        <Highlight>instituições</Highlight>
        <br />
        de cuidado
      </TextPrincipal>
      <Divisor />
      <Text>
        Segurança e organização para manter o foco no paciente. Eleve a régua do
        cuidado sem ocupar a equipe.
      </Text>
      <KnowMoreButton>Saiba mais</KnowMoreButton>
    </Content>
  </Container>
)
