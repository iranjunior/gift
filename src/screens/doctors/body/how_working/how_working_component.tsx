import React, { useContext } from 'react'

import { DataContext } from '../../../../context/data'

import IllustrationPrescription from '../../../../assets/images/illustration_prescription.svg'
import IllustrationRunning from '../../../../assets/images/illustration_running.svg'
import IllustrationFarmeBox from '../../../../assets/images/illustration_farmebox.svg'

import {
  Container,
  Content,
  ContainerCards,
  ContentCard,
  ContentCardIcon,
  ContentCardText,
  ContentCardTitle,
} from './how_working_styles'
import { HeaderCentered } from '../../../../ds'

type HowWorkingProps = {
  id?: string
}
type hashMapIllustrationsType = {
  [key: string]: string
}

const hashMapIllustrations: hashMapIllustrationsType = {
  prescription: IllustrationPrescription,
  delivery: IllustrationRunning,
  farmebox: IllustrationFarmeBox,
}

export const HowWorking: React.FC<HowWorkingProps> = ({ id }) => {
  const {
    body: {
      for_doctors: {
        how_working: { title, subtitle, arguments: reasons },
      },
    },
  } = useContext(DataContext)

  return (
    <Container id={id}>
      <Content>
        <HeaderCentered title={title} subtitle={subtitle} />
        <ContainerCards>
          {reasons
            .map(({ id, ...props }) => ({
              image: hashMapIllustrations[id],
              id,
              ...props,
            }))
            .map((argument) => (
              <ContentCard key={argument.title}>
                <ContentCardIcon src={argument.image} />
                <ContentCardTitle
                  dangerouslySetInnerHTML={{ __html: argument.title }}
                />
                <ContentCardText
                  dangerouslySetInnerHTML={{ __html: argument.text }}
                />
              </ContentCard>
            ))}
        </ContainerCards>
      </Content>
    </Container>
  )
}
