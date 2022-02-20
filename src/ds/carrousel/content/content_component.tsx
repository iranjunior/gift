import React from 'react'
import { useTheme } from 'styled-components'
import { Button, ButtonType } from '../../button'
import { CardProduct } from '../../card_product'

import { Text, ActionWrap, Image } from './content_styles'

export type CarrouselContentProps = {
  title: string
  image: string
}

export const CarrouselContent: React.FC<CarrouselContentProps> = ({
  title,
  image,
}) => {
  const { colors } = useTheme()
  const LeftSide = () => (
    <>
      <Text dangerouslySetInnerHTML={{ __html: title }} />
      <ActionWrap>
        <Button
          customColor={colors.neutral.lightness}
          label="Faça o seu orçamento"
        ></Button>
        <Button label="sem compromisso" type={ButtonType.Ghost}></Button>
      </ActionWrap>
    </>
  )

  const RightSide = () => <Image src={image} />

  return <CardProduct leftSide={LeftSide} rightSide={RightSide} />
}
