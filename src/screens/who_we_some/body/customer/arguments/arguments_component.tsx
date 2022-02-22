import React, { useContext } from 'react'
import images from '../../../../../assets/images'
import IllustrationPerson from '../../../../../assets/images/illustration_person.svg'
import IllustrationCare from '../../../../../assets/images/illustration_care.svg'
import { DataContext } from '../../../../../context/data'
import { CardProduct } from '../../../../../ds/card_product'

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
  const RightSideInitial = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: card_initial.title }} />
      <Text dangerouslySetInnerHTML={{ __html: card_initial.subtitle }} />
    </BlockText>
  )

  const LeftSideInitial = () => <Image src={images.ImagePersonReceivedBox} />

  const RightSideFinal = () => <Image src={images.ImageBill} />

  const LeftSideFinal = () => (
    <BlockText>
      <TextPrincipal dangerouslySetInnerHTML={{ __html: card_final.title }} />
      <Text dangerouslySetInnerHTML={{ __html: card_final.subtitle }} />
    </BlockText>
  )

  return (
    <Container id={id}>
      <Content>
        <CardProduct leftSide={LeftSideInitial} rightSide={RightSideInitial} />
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
        <CardProduct leftSide={LeftSideFinal} rightSide={RightSideFinal} />
      </Content>
    </Container>
  )
}
