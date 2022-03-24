import React, { useContext, useRef } from 'react'

import Person1 from '../../assets/images/person_1.png'
import QuotationIllustration from '../../assets/images/quotation.svg'
import { DataContext } from '../../context/data'
import { Header, Slides } from '../../ds'
import { useIntersection } from '../../hooks/useIntersection'

import {
  Container,
  Content,
  Image,
  Text,
  BlockText,
  Quotation,
  TextPrincipal,
} from './testimonies_styles'

type TestimoniesProps = {
  id?: string
  className?: string
}

export const Testimonies: React.FC<TestimoniesProps> = ({ id }) => {
  const {
    body: {
      common_pages: { testimonies: pageTestimonies },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '0px', true)

  type LeftSideProps = {
    testimony: string
    name: string
    age: number
    origin: string
  }
  const LeftSide = ({ testimony, name, age, origin }: LeftSideProps) => (
    <BlockText>
      <Quotation src={QuotationIllustration} />
      <TextPrincipal>{testimony}</TextPrincipal>
      <Text>
        {name}, {age} - {origin}
      </Text>
    </BlockText>
  )
  type RightSideProps = {
    image: string
  }
  const RightSide = ({ image }: RightSideProps) => (
    <Image src={Person1} alt="Person" />
  )

  return (
    <Container id={id}>
      <Content ref={ref}>
        <Header
          description={pageTestimonies.description}
          title={pageTestimonies.title}
        />
        <Slides
          slides={pageTestimonies.testimonies.map(
            ({ testimony, name, age, origin, image }) => ({
              LeftSide: (
                <LeftSide
                  testimony={testimony}
                  name={name}
                  age={age}
                  origin={origin}
                />
              ),
              RightSide: <RightSide image={image} />,
              key: testimony.split(' ').join('-'),
            })
          )}
        />
      </Content>
    </Container>
  )
}
