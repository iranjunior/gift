import React, { useContext, useRef } from 'react'

import { DataContext } from '../../../../context/data'

import IllustrationHandAtPhone from '../../../../assets/images/illustration_phone_in_hand.svg'
import IllustrationAnalyse from '../../../../assets/images/illustration_analyse.svg'
import IllustrationRunning from '../../../../assets/images/illustration_running.svg'
import IllustrationNotes from '../../../../assets/images/illustration_notes.svg'

import {
  Container,
  Content,
  ContainerCards,
  ContentCard,
  ContentCardIcon,
  ContentCardText,
  ContentCardTitle,
} from './arguments_styles'
import { useIntersection } from '../../../../hooks/useIntersection'

type ArgumentsProps = {
  id?: string
  className?: string
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

export const Arguments: React.FC<ArgumentsProps> = ({ id }) => {
  const {
    body: {
      for_companies: { arguments: reasons },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <Content ref={ref}>
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
