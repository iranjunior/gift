import React, { useContext } from 'react'

import images from '../../../../../assets/images'
import { Button, CardProduct as CardProductComponent } from '../../../../../ds'
import { DataContext } from '../../../../../context/data'

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

type CardProductProps = {
  id?: string
}

export const CardProduct: React.FC<CardProductProps> = ({ id }) => {
  const {
    body: {
      home: {
        companies: { card_product },
      },
    },
  } = useContext(DataContext)

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
    <Container id={id}>
      <Content>
        <CardProductComponent leftSide={LeftSide} rightSide={RightSide} />
      </Content>
    </Container>
  )
}
