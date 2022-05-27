import React, { useContext, useRef } from 'react'

import { people } from '../../../../assets/images'
import QuotationIllustration from '../../../../assets/images/quotation.svg'
import { DataContext } from '../../../../context/data'
import { Header, Slides } from '../../../../ds'
import { useIntersection } from '../../../../hooks/useIntersection'

import {
  Container,
  Content,
  Image,
  Text,
  BlockText,
  Quotation,
  TextPrincipal,
} from './testimonies_styles'

type HashMapIdToImage = {
  [key: string]: string
}

const hashMapIdToImage: HashMapIdToImage = {
  marisadonato: people.MarisaDonatoCustomer,
  raimundodacosta: people.RaimundoCostaCustomer,
}

type TestimoniesProps = {
  id?: string
  className?: string
}

export const Testimonies: React.FC<TestimoniesProps> = ({ id }) => {
  const {
    body: {
      for_customers: { testimonies: pageTestimonies },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '0px', true)

  type LeftSideProps = {
    testimony: string
    name: string
  }
  const LeftSide = ({ testimony, name }: LeftSideProps) => (
    <BlockText>
      <Quotation src={QuotationIllustration} />
      <TextPrincipal>{testimony}</TextPrincipal>
      <Text>{name}</Text>
    </BlockText>
  )
  type RightSideProps = {
    image: string
  }
  const RightSide = ({ image }: RightSideProps) => (
    <Image src={image} alt="Person" />
  )

  return (
    <Container id={id}>
      <Content ref={ref}>
        <Header
          description={pageTestimonies.description}
          title={pageTestimonies.title}
        />
        <Slides
          slides={pageTestimonies.testimonies
            .map(({ id, ...itens }) => ({
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              image: hashMapIdToImage[id!],
              ...itens,
            }))
            .map(({ testimony, name, image }) => ({
              LeftSide: <LeftSide testimony={testimony} name={name} />,
              RightSide: <RightSide image={image} />,
              key: testimony.split(' ').join('-'),
            }))}
        />
      </Content>
    </Container>
  )
}
