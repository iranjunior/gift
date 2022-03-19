import React, { useContext } from 'react'
import { DataContext } from '../../../../context/data'
import IllustrationWinnings from '../../../../assets/images/illustration_winnings.svg'
import IllustrationBook from '../../../../assets/images/illustration_book.svg'
import IllustrationOkay from '../../../../assets/images/illustration_okay.svg'
import IllustrationContract from '../../../../assets/images/illustration_contract.svg'
import IllustrationConvenience from '../../../../assets/images/illustration_convenience.svg'

import {
  Container,
  Content,
  ContentCard,
  ContentCardIcon,
  ContentCardTitle,
  ContentCardText,
  ContainerCards,
  ContainerButtons,
  Main,
} from './advantage_styles'
import { Button, ButtonType, HeaderCentered } from '../../../../ds'

type AdvantageProps = {
  id?: string
}
type hashMapIllustrationsType = {
  [key: string]: string
}

const hashMapIllustrations: hashMapIllustrationsType = {
  cost: IllustrationOkay,
  safety: IllustrationContract,
  convenience: IllustrationConvenience,
  training: IllustrationBook,
  support: IllustrationWinnings,
}

export const Advantage: React.FC<AdvantageProps> = ({ id }) => {
  const {
    body: {
      for_companies: {
        advantage: { advantages, subtitle, title },
      },
    },
  } = useContext(DataContext)

  return (
    <Container id={id}>
      <Content>
        <HeaderCentered title={title} subtitle={subtitle} />
        <Main>
          <ContainerCards>
            {advantages
              .map(({ id, ...props }) => ({
                image: hashMapIllustrations[id],
                id,
                ...props,
              }))
              .map((reason) => (
                <ContentCard key={reason.title}>
                  <ContentCardIcon src={reason.image} />
                  <ContentCardTitle
                    dangerouslySetInnerHTML={{ __html: reason.title }}
                  />
                  <ContentCardText
                    dangerouslySetInnerHTML={{ __html: reason.text }}
                  />
                </ContentCard>
              ))}
          </ContainerCards>
          <ContainerButtons>
            <Button label="Faça o seu orçamento" />
            <Button label="sem compromisso" type={ButtonType.Ghost} />
          </ContainerButtons>
        </Main>
      </Content>
    </Container>
  )
}
