import React, { useContext } from 'react'

import { DataContext } from '../../../../context/data'

import IllustrationHandAtPhone from '../../../../assets/images/illustration_phone_in_hand.svg'
import IllustrationAnalyse from '../../../../assets/images/illustration_analyse.svg'
import IllustrationRunning from '../../../../assets/images/illustration_running.svg'
import IllustrationNotes from '../../../../assets/images/illustration_notes.svg'
import videos from '../../../../assets/videos'

import {
  Container,
  Content,
  Video,
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
  request: IllustrationHandAtPhone,
  analyse: IllustrationAnalyse,
  delivery: IllustrationRunning,
  attendance: IllustrationNotes,
}

export const HowWorking: React.FC<HowWorkingProps> = ({ id }) => {
  const {
    body: {
      for_companies: {
        how_working: { title, subtitle, arguments: reasons },
      },
    },
  } = useContext(DataContext)

  return (
    <Container id={id}>
      <Content>
        <HeaderCentered title={title} subtitle={subtitle} />
        <Video
          controls
          autoPlay
          typeof="video/mp4"
          src={videos.VideoFarMeBox}
        />
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
