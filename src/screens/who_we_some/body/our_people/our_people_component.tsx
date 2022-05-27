import React, { useContext, useRef } from 'react'
import { people } from '../../../../assets/images'
import { DataContext } from '../../../../context/data'
import { HeaderCentered } from '../../../../ds'
import { useIntersection } from '../../../../hooks/useIntersection'

import {
  Card,
  CardImage,
  CardsContent,
  CardTitle,
  CardText,
  Container,
  Content,
} from './our_people_styles'

type HashMapIdToImage = {
  [key: string]: string
}

const hashMapIdToImage: HashMapIdToImage = {
  hagabo: people.HagaboPharmaceutical,
  carina: people.CarinaNevesPharmaceutical,
  mariana: people.MarianaMesquitaSupport,
  gabriella: people.GabriellaCampera,
}

type OurPeopleProps = {
  id?: string
  className?: string
}

export const OurPeople: React.FC<OurPeopleProps> = () => {
  const {
    body: {
      who_we_are: { our_people },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref}>
      <Content ref={ref}>
        <HeaderCentered
          title={our_people.title}
          subtitle={our_people.subtitle}
        />
        <CardsContent>
          {our_people.people.map((person) => (
            <Card key={person.name}>
              <CardImage src={hashMapIdToImage[person.image_id]} />
              <CardTitle>{person.name}</CardTitle>
              <CardText>{person.job}</CardText>
            </Card>
          ))}
        </CardsContent>
      </Content>
    </Container>
  )
}
