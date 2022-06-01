import React, { useContext, useRef } from 'react'

import { people } from '../../../../assets/images'
import QuotationIllustration from '../../../../assets/images/quotation.svg'
import { DataContext } from '../../../../context/data'
import { Slides } from '../../../../ds'
import { useIntersection } from '../../../../hooks/useIntersection'

import {
  Container,
  Content,
  Image,
  Text,
  BlockText,
  Quotation,
  TextPrincipal,
} from './testimonies_employee_styles'

type TestimoniesEmployeeProps = {
  id?: string
  className?: string
}

type HashMapIdToImage = {
  [key: string]: string
}

const hashMapIdToImage: HashMapIdToImage = {
  marina: people.MarinaFounder,
  sammilla: people.SammillaFounder,
  luciana: people.LucianaFounder,
}

export const TestimoniesEmployee: React.FC<TestimoniesEmployeeProps> = ({
  id,
}) => {
  const {
    body: {
      who_we_are: { testimonies: pageTestimoniesEmployee },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '0px', true)

  type LeftSideProps = {
    testimony: string
    name: string
    job: string
  }
  const LeftSide = ({ testimony, name, job }: LeftSideProps) => (
    <BlockText>
      <Quotation src={QuotationIllustration} />
      <TextPrincipal size={testimony.length}>{testimony}</TextPrincipal>
      <Text>
        {name} - {job}
      </Text>
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
        <Slides
          slides={pageTestimoniesEmployee.testimonies_employee.map(
            ({ testimony, name, job, image_id }) => ({
              LeftSide: (
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                <LeftSide testimony={testimony!} name={name} job={job} />
              ),
              RightSide: <RightSide image={hashMapIdToImage[image_id]} />,
              key: name.split(' ').join('-'),
            })
          )}
        />
      </Content>
    </Container>
  )
}
