import React, { useState } from 'react'

import Person1 from '../../../../assets/person_1.png'
import QuotationIllustration from '../../../../assets/quotation.svg'

import {
  Container,
  Header,
  Content,
  Subtitle,
  Title,
  Image,
  Text,
  BlockText,
  Quotation,
  TextPrincipal,
  Testimony,
  BlockDots,
  DotIndicator,
} from './testimonies_styles'

type TestimoniesProps = {
  id?: string
}

const testimonies = [
  {
    name: 'Claudia',
    age: 78,
    origin: 'Cliente Far.me box',
    testimony: 'Far.me te apoia no cuidado diário com quem você ama.',
    image: Person1,
  },
  {
    name: 'Maria',
    age: 52,
    origin: 'Cliente Far.me box',
    testimony: 'Far.me te apoia no cuidado diário com quem você ama. todo dia',
    image: Person1,
  },
  {
    name: 'Jessica',
    age: 92,
    origin: 'Cliente Far.me box',
    testimony: 'Far.me te apoia no cuidado diário',
    image: Person1,
  },
  {
    name: 'Reinaldo',
    age: 84,
    origin: 'Cliente Far.me box',
    testimony: 'Far.me ama você.',
    image: Person1,
  },
]

export const Testimonies: React.FC<TestimoniesProps> = ({ id }) => {
  const [testimonyActive, setTestimony] = useState(testimonies[0])

  return (
    <Container id={id}>
      <Header>
        <Subtitle>Depoimentos</Subtitle>
        <Title>
          Com a palavra,
          <br /> nossos Far.membros.
        </Title>
      </Header>
      <Content>
        {testimonies.map((testimony) => (
          <Testimony
            hidden={testimonyActive.testimony !== testimony.testimony}
            key={testimony.testimony}
          >
            <BlockText>
              <Quotation src={QuotationIllustration} />
              <TextPrincipal>{testimony.testimony}</TextPrincipal>
              <Text>
                {testimony.name}, {testimony.age} - {testimony.origin}
              </Text>
            </BlockText>
            <Image src={Person1} />
          </Testimony>
        ))}
        <BlockDots>
          {testimonies.map((testimony) => (
            <DotIndicator
              key={testimony.testimony.concat(testimony.name)}
              active={testimony.testimony === testimonyActive.testimony}
              onClick={() => setTestimony(testimony)}
            />
          ))}
        </BlockDots>
      </Content>
    </Container>
  )
}
