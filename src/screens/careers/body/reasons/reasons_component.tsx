import React, { useContext } from 'react'
import { DataContext } from '../../../../context/data'
import IllustrationCare from '../../../../assets/images/illustration_care.svg'
import IllustrationBox from '../../../../assets/images/illustration_box.svg'
import IllustrationDrug from '../../../../assets/images/illustration_drug.svg'
import IllustrationOkay from '../../../../assets/images/illustration_okay.svg'

import {
  Container,
  Content,
  ContentCard,
  ContentCardIcon,
  ContentCardTitle,
  ContainerCards,
  Main,
} from './reasons_styles'

type ReasonsProps = {
  id?: string
}
type hashMapIllustrationsType = {
  [key: string]: string
}

const hashMapIllustrations: hashMapIllustrationsType = {
  DrivenByChallenges: IllustrationOkay,
  DreamBig: IllustrationCare,
  ValuesLearningAndCompanionship: IllustrationBox,
  Courage: IllustrationDrug,
}

export const Reasons: React.FC<ReasonsProps> = ({ id }) => {
  const {
    body: {
      careers: { reasons },
    },
  } = useContext(DataContext)

  return (
    <Container id={id}>
      <Content>
        <Main>
          <ContainerCards>
            {reasons
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
                </ContentCard>
              ))}
          </ContainerCards>
        </Main>
      </Content>
    </Container>
  )
}
