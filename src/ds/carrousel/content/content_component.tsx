import React from 'react'
import { useTheme } from 'styled-components'
import { addingCurrentQueryParams } from '../../../components/helpers/url_parser'
import { Button, ButtonType } from '../../button'

import {
  Text,
  ActionWrap,
  Image,
  Container,
  ContainerCard,
  LeftSide,
  RightSide,
  TextInformative,
} from './content_styles'

export type CarrouselContentProps = {
  title?: string
  image: string
  imageSizeInTablet?: 'cover' | 'contain'
  onlyImagens?: boolean
}

export const CarrouselContent: React.FC<CarrouselContentProps> = ({
  title,
  image,
  imageSizeInTablet,
  onlyImagens,
}) => {
  const { colors } = useTheme()
  const LeftSideContent = () => (
    <>
      <Text dangerouslySetInnerHTML={{ __html: title! }} />
      <ActionWrap>
        <Button
          onClick={() =>
            window.open(
              addingCurrentQueryParams('https://app.farme.com.br/orcamento')
            )
          }
          customColor={colors.neutral.lightness}
          label="Faça o seu orçamento"
        ></Button>
        <TextInformative> sem compromisso</TextInformative>
      </ActionWrap>
    </>
  )

  const RightSideContent = () => (
    <Image sizeInTablet={imageSizeInTablet} src={image} />
  )

  return (
    <Container>
      <ContainerCard onlyImagens={onlyImagens}>
        {onlyImagens ? (
          <Image src={image} sizeInTablet={imageSizeInTablet} />
        ) : (
          <>
            <LeftSide>
              <LeftSideContent />
            </LeftSide>
            <RightSide>
              <RightSideContent />
            </RightSide>
          </>
        )}
      </ContainerCard>
    </Container>
  )
}
