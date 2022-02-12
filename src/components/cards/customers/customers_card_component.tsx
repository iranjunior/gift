import React from 'react'
import ImageCard from '../../../assets/ilustration_calendar.svg'
import {
  Container,
  Content,
  KnowMoreButton,
  Image,
  TextPrincipal,
  Highlight,
  Divisor,
  Text,
} from './customers_card_styles'

export const CustomersCard = () => (
  <Container>
    <Content>
      <Image src={ImageCard} />
      <TextPrincipal>
        Para quem toma medicamentos
        <br /> <Highlight>todos os dias</Highlight>
      </TextPrincipal>
      <Divisor />
      <Text>
        Seus medicamentos separados da forma que devem ser tomados e entregues
        na sua porta a cada 30 dias.
      </Text>
      <KnowMoreButton>Saiba mais</KnowMoreButton>
    </Content>
  </Container>
)
