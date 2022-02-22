import React, { useContext } from 'react'
import images from '../../../../../assets/images'
import { DataContext } from '../../../../../context/data'
import { HeaderCentered } from '../../../../../ds'

import {
  Card,
  CardImage,
  CardsContent,
  CardTitle,
  CardText,
  Container,
  Content,
} from './our_people_styles'

type OurPeopleProps = {
  id?: string
}

export const OurPeople: React.FC<OurPeopleProps> = () => {
  const {
    body: {
      who_we_are: { our_people },
    },
  } = useContext(DataContext)

  return (
    <Container>
      <Content>
        <HeaderCentered
          title={our_people.title}
          subtitle={our_people.subtitle}
        />
        <CardsContent>
          {our_people.people.map((person) => (
            <Card key={person.image_url}>
              <CardImage src={images.ImagePerson} />
              <CardTitle>{person.name}</CardTitle>
              <CardText>{person.message}</CardText>
            </Card>
          ))}
        </CardsContent>
      </Content>
    </Container>
  )
}
