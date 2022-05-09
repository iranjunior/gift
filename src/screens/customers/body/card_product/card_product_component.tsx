import React, { useContext, useRef } from 'react'

import images from '../../../../assets/images'
import { Button, CardProduct as CardProductComponent } from '../../../../ds'
import { DataContext } from '../../../../context/data'

import {
  Container,
  Content,
  LeftSideContainer,
  LeftSideHeader,
  LeftSideLegend,
  LeftSideSubtitle,
  LeftSideTitle,
  RightSideContainer,
  Image,
} from './card_product_styles'
import { useIntersection } from '../../../../hooks/useIntersection'

type CardProductProps = {
  id?: string
  className?: string
}

export const CardProduct: React.FC<CardProductProps> = ({ id }) => {
  const {
    body: {
      for_customers: { card_product },
    },
  } = useContext(DataContext)

  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  const LeftSide = () => (
    <LeftSideContainer>
      <LeftSideHeader>
        <LeftSideLegend>{card_product.legend}</LeftSideLegend>
        <LeftSideTitle
          dangerouslySetInnerHTML={{ __html: card_product.title }}
        />
        <LeftSideSubtitle
          dangerouslySetInnerHTML={{ __html: card_product.subtitle }}
        />
      </LeftSideHeader>
      <Button label="Saiba mais" />
    </LeftSideContainer>
  )
  const RightSide = () => (
    <RightSideContainer>
      <Image src={images.ImageBoxPointingLeft} />
    </RightSideContainer>
  )

  return (
    <Container ref={ref} id={id}>
      <Content ref={ref}>
        <CardProductComponent leftSide={LeftSide} rightSide={RightSide} />
      </Content>
    </Container>
  )
}
