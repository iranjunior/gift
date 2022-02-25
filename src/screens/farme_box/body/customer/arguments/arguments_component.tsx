import React, { useContext } from 'react'
import images from '../../../../../assets/images'
import { DataContext } from '../../../../../context/data'
import { CardImage } from '../../../../../ds/card_image'

import {
  BlockText,
  Container,
  Content,
  Image,
  TextPrincipal,
} from './arguments_styles'
import { HeaderCentered } from '../../../../../ds'

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
  const RightSideFirstCard = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: cards.first }} />
    </BlockText>
  )

  const LeftSideFirstCard = () => <Image src={images.ImageBoxReceived} />

  const RightSideSecondFinal = () => <Image src={images.ImageBill} />

  const LeftSideSecondFinal = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: cards.second }} />
    </BlockText>
  )

  const RightSideThirdCard = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: cards.third }} />
    </BlockText>
  )

  const LeftSideThirdCard = () => <Image src={images.ImageOldManPhone} />

  return (
    <Container id={id}>
      <Content>
        <HeaderCentered title={title} />
        <CardImage
          leftSide={LeftSideFirstCard}
          rightSide={RightSideFirstCard}
        />
        <CardImage
          leftSide={LeftSideSecondFinal}
          rightSide={RightSideSecondFinal}
        />
        <CardImage
          leftSide={LeftSideThirdCard}
          rightSide={RightSideThirdCard}
        />
      </Content>
    </Container>
  )
}
