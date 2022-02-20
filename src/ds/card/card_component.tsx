import React from 'react'
import IllustrationCalendar from '../../assets/images/illustration_calendar.svg'
import IllustrationCare from '../../assets/images/illustration_care.svg'
import IllustrationMedical from '../../assets/images/illustration_medical.svg'
import { Button } from '../button'
import {
  Container,
  Content,
  Image,
  TextPrincipal,
  Divisor,
  Text,
} from './card_styles'

type CardProps = {
  title: string
  description: string
  type: 'doctors' | 'companies' | 'customers'
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
        <Button label="Saiba mais" />
      </Content>
    </Container>
  )
}
