import React, { useContext, useState } from 'react'

import Person1 from '../../../../../assets/images/person_1.png'
import QuotationIllustration from '../../../../../assets/images/quotation.svg'
import { DataContext } from '../../../../../context/data'
import { Header } from '../../../../../ds'

import {
  Container,
  Content,
  Image,
  Text,
  BlockText,
  Quotation,
  TextPrincipal,
  Testimony,
  BlockDots,
  DotIndicator,
  TestimoniesWrapper,
} from './testimonies_styles'

type TestimoniesProps = {
  id?: string
}

export const Testimonies: React.FC<TestimoniesProps> = ({ id }) => {
  const {
    body: {
      farme_box: { testimonies: pageTestimonies },
    },
  } = useContext(DataContext)

  const [testimonyActive, setTestimony] = useState(
    pageTestimonies.testimonies[0]
  )
  return (
    <Container id={id}>
      <Content>
        <Header
          description={pageTestimonies.description}
          title={pageTestimonies.title}
        />
        <TestimoniesWrapper>
          {pageTestimonies.testimonies.map(
            ({ testimony, age, origin, name }) => (
              <Testimony
                hidden={testimonyActive.testimony !== testimony}
                key={testimony}
              >
                <BlockText>
                  <Quotation src={QuotationIllustration} />
                  <TextPrincipal>{testimony}</TextPrincipal>
                  <Text>
                    {name}, {age} - {origin}
                  </Text>
                </BlockText>
                <Image src={Person1} />
              </Testimony>
            )
          )}
          <BlockDots>
            {pageTestimonies.testimonies.map((testimony) => (
              <DotIndicator
                key={testimony.testimony.concat(testimony.name)}
                active={testimony.testimony === testimonyActive.testimony}
                onClick={() => setTestimony(testimony)}
              />
            ))}
          </BlockDots>
        </TestimoniesWrapper>
      </Content>
    </Container>
  )
}
