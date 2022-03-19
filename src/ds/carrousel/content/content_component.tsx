import React from 'react'
import { useTheme } from 'styled-components'
import { Button, ButtonType } from '../../button'

import {
  Text,
  ActionWrap,
  Image,
  Container,
  ContainerCard,
  LeftSide,
  RightSide,
} from './content_styles'

export type CarrouselContentProps = {
  title: string
  image: string
  imageSizeInTablet?: 'cover' | 'contain'
}

export const CarrouselContent: React.FC<CarrouselContentProps> = ({
  title,
  image,
  imageSizeInTablet,
}) => {
  const { colors } = useTheme()
  const LeftSideContent = () => (
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

  const RightSideContent = () => (
    <Image sizeInTablet={imageSizeInTablet} src={image} />
  )

  return (
    <Container>
      <ContainerCard>
        <LeftSide>
          <LeftSideContent />
        </LeftSide>
        <RightSide>
          <RightSideContent />
        </RightSide>
      </ContainerCard>
    </Container>
  )
}
