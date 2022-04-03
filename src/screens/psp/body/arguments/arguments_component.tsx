import React, { useContext, useRef } from 'react'
import images from '../../../../assets/images'
import { DataContext } from '../../../../context/data'
import { CardImage, Button, CheckedItem } from '../../../../ds'

import {
  BlockText,
  Container,
  Content,
  Image,
  TextPrincipal,
  Text,
} from './arguments_styles'
import { useIntersection } from '../../../../hooks/useIntersection'
import { useTheme } from 'styled-components'

type ArgumentsProps = {
  id?: string
  className?: string
}

export const Arguments: React.FC<ArgumentsProps> = ({ id }) => {
  const {
    body: {
      psp: {
        arguments: { cards },
      },
    },
  } = useContext(DataContext)
  const theme = useTheme()
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  const isTablet = window.innerWidth < 1024

  const TextFirstCard = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: cards.first.title }} />
      <Text dangerouslySetInnerHTML={{ __html: cards.first.text }} />
      <Button label={cards.first.label_button} />
    </BlockText>
  )
  const ImageFirstCard = () => <Image src={images.ImageOldManWithHeadphones} />

  const RightSideFirstCard = () => <TextFirstCard />
  const LeftSideFirstCard = () => <ImageFirstCard />

  const ImageSecondCard = () => <Image src={images.ImagePharmaceuticalWoman} />

  const TextSecondFinal = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: cards.second.title }} />
      <Text dangerouslySetInnerHTML={{ __html: cards.second.text }} />
      {cards.second.points?.map((point) => (
        <CheckedItem
          key={point}
          text={point}
          color={theme.colors.neutral.darkness}
        />
      )) ?? null}
    </BlockText>
  )
  const RightSideSecondCard = () =>
    isTablet ? <TextSecondFinal /> : <ImageSecondCard />
  const LeftSideSecondCard = () =>
    isTablet ? <ImageSecondCard /> : <TextSecondFinal />

  const TextThirdCard = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: cards.third.title }} />
      <Text dangerouslySetInnerHTML={{ __html: cards.third.text }} />
    </BlockText>
  )
  const ImageThirdCard = () => <Image src={images.ImageOldManPhone} />

  const RightSideThirdCard = () => <TextThirdCard />
  const LeftSideThirdCard = () => <ImageThirdCard />

  const ImageFourthCard = () => (
    <Image src={images.ImageOldManWithPhoneInPark} />
  )

  const TextFourthFinal = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: cards.fourth.title }} />
      <Text dangerouslySetInnerHTML={{ __html: cards.fourth.text }} />
    </BlockText>
  )
  const RightSideFourthCard = () =>
    isTablet ? <TextFourthFinal /> : <ImageFourthCard />
  const LeftSideFourthCard = () =>
    isTablet ? <ImageFourthCard /> : <TextFourthFinal />

  return (
    <Container ref={ref} id={id}>
      <Content ref={ref}>
        <CardImage
          leftSide={LeftSideFirstCard}
          rightSide={RightSideFirstCard}
        />
        <CardImage
          leftSide={LeftSideSecondCard}
          rightSide={RightSideSecondCard}
        />
        <CardImage
          leftSide={LeftSideThirdCard}
          rightSide={RightSideThirdCard}
        />
        <CardImage
          leftSide={LeftSideFourthCard}
          rightSide={RightSideFourthCard}
        />
      </Content>
    </Container>
  )
}
