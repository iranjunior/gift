import React, { useContext } from 'react'
import images from '../../../../assets/images'
import { DataContext } from '../../../../context/data'
import { CardImage } from '../../../../ds/card_image'

import {
  BlockText,
  Container,
  Content,
  Image,
  TextPrincipal,
} from './arguments_styles'
import { HeaderCentered } from '../../../../ds'

type ArgumentsProps = {
  id?: string
}

export const Arguments: React.FC<ArgumentsProps> = ({ id }) => {
  const {
    body: {
      farme_box: {
        arguments: { cards, title },
      },
    },
  } = useContext(DataContext)
  const isTablet = window.innerWidth < 1024

  const TextFirstCard = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: cards.first }} />
    </BlockText>
  )
  const ImageFirstCard = () => <Image src={images.ImageBoxReceived} />

  const RightSideFirstCard = () => <TextFirstCard />
  const LeftSideFirstCard = () => <ImageFirstCard />

  const ImageSecondCard = () => <Image src={images.ImageBill} />

  const TextSecondFinal = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: cards.second }} />
    </BlockText>
  )
  const RightSideSecondCard = () =>
    isTablet ? <TextSecondFinal /> : <ImageSecondCard />
  const LeftSideSecondCard = () =>
    isTablet ? <ImageSecondCard /> : <TextSecondFinal />

  const TextThirdCard = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: cards.third }} />
    </BlockText>
  )
  const ImageThirdCard = () => <Image src={images.ImageOldManPhone} />

  const RightSideThirdCard = () => <TextThirdCard />
  const LeftSideThirdCard = () => <ImageThirdCard />

  return (
    <Container id={id}>
      <Content>
        <HeaderCentered title={title} />
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
      </Content>
    </Container>
  )
}
