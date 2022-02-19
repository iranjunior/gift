import React from 'react'
import IllustrationCalendar from '../../assets/images/illustration_calendar.svg'
import IllustrationCare from '../../assets/images/illustration_care.svg'
import IllustrationMedical from '../../assets/images/illustration_medical.svg'
import {
  Container,
  Content,
  KnowMoreButton,
  Image,
  TextPrincipal,
  Divisor,
  Text,
} from './card_styles'

type CardProps = {
  title: string
  description: string
  type: string
}

export const Card: React.FC<CardProps> = ({ title, description, type }) => {
  const selectImage = () => {
    if (type === 'customers') {
      return <Image src={IllustrationCalendar} />
    }
    if (type === 'companies') {
      return <Image src={IllustrationCare} />
    }
    if (type === 'doctors') {
      return <Image src={IllustrationMedical} />
    }
  }
  return (
    <Container type={type}>
      <Content>
        {selectImage()}
        <TextPrincipal dangerouslySetInnerHTML={{ __html: title }} />
        <Divisor />
        <Text>{description}</Text>
        <KnowMoreButton>Saiba mais</KnowMoreButton>
      </Content>
    </Container>
  )
}
