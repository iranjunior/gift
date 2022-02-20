import React from 'react'
import { useTheme } from 'styled-components'
import { Button, ButtonType } from '../../../ds'

import {
  Container,
  LeftSide,
  Text,
  ActionWrap,
  RightSide,
  Image,
} from './content_styles'

export type CarouselContentProps = {
  title: string
  image: string
}

export const CarouselContent: React.FC<CarouselContentProps> = ({
  title,
  image,
}) => {
  const { colors } = useTheme()
  return (
    <Container>
      <LeftSide>
        <Text dangerouslySetInnerHTML={{ __html: title }} />
        <ActionWrap>
          <Button
            customColor={colors.neutral.lightness}
            label="Faça o seu orçamento"
          ></Button>
          <Button label="sem compromisso" type={ButtonType.Ghost}></Button>
        </ActionWrap>
      </LeftSide>
      <RightSide>
        <Image src={image} />
      </RightSide>
    </Container>
  )
}
