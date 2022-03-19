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
  Text,
} from './arguments_styles'

import { Button } from '../../../../ds'

type ArgumentsProps = {
  id?: string
}

export const Arguments: React.FC<ArgumentsProps> = ({ id }) => {
  const {
    body: {
      clinics: { arguments: points },
    },
  } = useContext(DataContext)
  const isTablet = window.innerWidth < 1024
  const TextFirstCard = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: points[0].title }} />
      <Text dangerouslySetInnerHTML={{ __html: points[0].text }} />
      {!!points[0].label_button && <Button label={points[0].label_button} />}
    </BlockText>
  )
  const ImageFirstCard = () => <Image src={images.ImageOldManWithAPhone} />

  const RightSideFirstCard = () => <TextFirstCard />
  const LeftSideFirstCard = () => <ImageFirstCard />

  const ImageSecondCard = () => <Image src={images.ImageWatchDoctor} />

  const TextSecondCard = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: points[1].title }} />
      <Text dangerouslySetInnerHTML={{ __html: points[1].text }} />
      {!!points[1].label_button && <Button label={points[1].label_button} />}
    </BlockText>
  )
  const RightSideSecondFinal = () =>
    isTablet ? <TextSecondCard /> : <ImageSecondCard />
  const LeftSideSecondFinal = () =>
    isTablet ? <ImageSecondCard /> : <TextSecondCard />

  const TextThirdCard = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: points[2].title }} />
      <Text dangerouslySetInnerHTML={{ __html: points[2].text }} />
      {!!points[2].label_button && <Button label={points[2].label_button} />}
    </BlockText>
  )
  const ImageThirdCard = () => <Image src={images.ImageManWithHeadphone} />

  const RightSideThirdCard = () => <TextThirdCard />
  const LeftSideThirdCard = () => <ImageThirdCard />

  return (
    <Container id={id}>
      <Content>
        <CardImage
          leftSide={LeftSideFirstCard}
          rightSide={RightSideFirstCard}
          showArrow={!isTablet}
        />
        <CardImage
          leftSide={LeftSideSecondFinal}
          rightSide={RightSideSecondFinal}
          showArrow={!isTablet}
          arrowReversed
        />
        <CardImage
          leftSide={LeftSideThirdCard}
          rightSide={RightSideThirdCard}
          showArrow={!isTablet}
        />
      </Content>
    </Container>
  )
}
