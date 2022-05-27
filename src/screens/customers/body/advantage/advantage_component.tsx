import React, { useContext, useRef } from 'react'
import { DataContext } from '../../../../context/data'
import images from '../../../../assets/images'

import {
  Container,
  Content,
  Main,
  Image,
  BlockText,
  TextPrincipal,
  Text,
} from './advantage_styles'

import { HeaderCentered, Slides } from '../../../../ds'
import { useIntersection } from '../../../../hooks/useIntersection'

const hashMapIdToImage: { [key: string]: string } = {
  cost: images.ImagePillsInHand,
  safety: images.ImageWifeAndHusband,
  convenience: images.ImagePillsStackInHand,
  support: images.ImageDoctorAtPhone,
}

type AdvantageProps = {
  id?: string
  className?: string
}

export const Advantage: React.FC<AdvantageProps> = ({ id }) => {
  const {
    body: {
      for_customers: {
        advantages: { advantages, subtitle, title, legend },
      },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  type LeftSideProps = {
    image: string
  }
  const LeftSide = ({ image }: LeftSideProps) => <Image src={image} />

  type RightSideProps = {
    highlight: string
    text: string
  }
  const RightSide = ({ highlight, text }: RightSideProps) => (
    <BlockText>
      <TextPrincipal>{highlight}</TextPrincipal>
      <Text>{text}</Text>
    </BlockText>
  )

  return (
    <Container ref={ref} id={id}>
      <Content ref={ref}>
        <HeaderCentered legend={legend} title={title} subtitle={subtitle} />
        <Main>
          <Slides
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            slides={advantages!
              .map(({ id, ...itens }) => ({
                image: hashMapIdToImage[id],
                id,
                ...itens,
              }))
              .map(({ title, text, id, image }) => ({
                LeftSide: <LeftSide image={image} />,
                RightSide: <RightSide highlight={title} text={text} />,
                key: id,
              }))}
            reversed
          />
        </Main>
      </Content>
    </Container>
  )
}
