import React, { useContext, useEffect, useState } from 'react'
import images from '../../../../assets/images'
import IllustrationPerson from '../../../../assets/images/illustration_person.svg'
import IllustrationCare from '../../../../assets/images/illustration_care.svg'
import { DataContext } from '../../../../context/data'
import { CardImage } from '../../../../ds/card_image'

import {
  BlockText,
  Container,
  Content,
  ContentCard,
  ContentCardIcon,
  ContentCardText,
  ContentContainer,
  Image,
  Text,
  TextPrincipal,
} from './arguments_styles'

type ArgumentsProps = {
  id?: string
}

export const Arguments: React.FC<ArgumentsProps> = ({ id }) => {
  const {
    body: {
      who_we_are: {
        arguments: { card_initial, card_final, cards },
      },
    },
  } = useContext(DataContext)

  const [isTablet, setTablet] = useState(window.innerWidth < 1024)

  useEffect(() => setTablet(window.innerWidth < 1024), [window.innerWidth])

  const TextCardInitial = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: card_initial.title }} />
      <Text dangerouslySetInnerHTML={{ __html: card_initial.subtitle }} />
    </BlockText>
  )
  const ImageCardInitial = () => <Image src={images.ImagePersonReceivedBox} />

  const RightSideInitial = () => <TextCardInitial />
  const LeftSideInitial = () => <ImageCardInitial />

  const ImageCardFinal = () => <Image src={images.ImageBill} />

  const TextCardFinal = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: card_final.title }} />
      <Text dangerouslySetInnerHTML={{ __html: card_final.subtitle }} />
    </BlockText>
  )

  const RightSideFinal = () =>
    isTablet ? <TextCardFinal /> : <ImageCardFinal />
  const LeftSideFinal = () =>
    isTablet ? <ImageCardFinal /> : <TextCardFinal />

  return (
    <Container id={id}>
      <Content>
        <CardImage leftSide={LeftSideInitial} rightSide={RightSideInitial} />
        <ContentContainer>
          <ContentCard>
            <ContentCardIcon src={IllustrationCare} />
            <ContentCardText
              dangerouslySetInnerHTML={{ __html: cards.first.text }}
            />
          </ContentCard>
          <ContentCard>
            <ContentCardIcon src={IllustrationPerson} />
            <ContentCardText
              dangerouslySetInnerHTML={{ __html: cards.second.text }}
            />
          </ContentCard>
        </ContentContainer>
        <CardImage leftSide={LeftSideFinal} rightSide={RightSideFinal} />
      </Content>
    </Container>
  )
}
