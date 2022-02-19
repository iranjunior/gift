import React, { useContext, useState } from 'react'

import Person1 from '../../../../assets/images/person_1.png'
import QuotationIllustration from '../../../../assets/images/quotation.svg'
import { DataContext } from '../../../../context/data'
import { Header } from '../../../header'

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
} from './testimonies_styles'

type TestimoniesProps = {
  id?: string
}

export const Testimonies: React.FC<TestimoniesProps> = ({ id }) => {
  const {
    body: { testimonies: pageTestimonies },
  } = useContext(DataContext)

  const [testimonyActive, setTestimony] = useState(
    pageTestimonies.testimonies[0]
  )
  console.log(testimonyActive)
  return (
    <Container id={id}>
      <Header
        description={pageTestimonies.description}
        title={pageTestimonies.title}
      />
      <Content>
        {pageTestimonies.testimonies.map(({ testimony, age, origin, name }) => (
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
        ))}
        <BlockDots>
          {pageTestimonies.testimonies.map((testimony) => (
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
