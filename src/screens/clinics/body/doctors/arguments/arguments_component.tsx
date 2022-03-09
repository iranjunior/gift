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
  Text,
} from './arguments_styles'

import { Button } from '../../../../../ds'

type ArgumentsProps = {
  id?: string
}

export const Arguments: React.FC<ArgumentsProps> = ({ id }) => {
  const {
    body: {
      clinics: { arguments: points },
    },
  } = useContext(DataContext)
  const RightSideFirstCard = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: points[0].title }} />
      <Text dangerouslySetInnerHTML={{ __html: points[0].text }} />
      {!!points[0].label_button && <Button label={points[0].label_button} />}
    </BlockText>
  )

  const LeftSideFirstCard = () => <Image src={images.ImageOldManWithAPhone} />

  const RightSideSecondFinal = () => <Image src={images.ImageWatchDoctor} />

  const LeftSideSecondFinal = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: points[1].title }} />
      <Text dangerouslySetInnerHTML={{ __html: points[1].text }} />
      {!!points[1].label_button && <Button label={points[1].label_button} />}
    </BlockText>
  )

  const RightSideThirdCard = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: points[2].title }} />
      <Text dangerouslySetInnerHTML={{ __html: points[2].text }} />
      {!!points[2].label_button && <Button label={points[2].label_button} />}
    </BlockText>
  )

  const LeftSideThirdCard = () => <Image src={images.ImageManWithHeadphone} />

  return (
    <Container id={id}>
      <Content>
        <CardImage
          leftSide={LeftSideFirstCard}
          rightSide={RightSideFirstCard}
          showArrow
        />
        <CardImage
          leftSide={LeftSideSecondFinal}
          rightSide={RightSideSecondFinal}
          showArrow
          arrowReversed
        />
        <CardImage
          leftSide={LeftSideThirdCard}
          rightSide={RightSideThirdCard}
          showArrow
        />
      </Content>
    </Container>
  )
}
