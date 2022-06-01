import React, { useContext, useRef } from 'react'

import { DataContext } from '../../../../context/data'

import IllustrationPhoneInHand from '../../../../assets/images/illustration_phone_in_hand.svg'
import IllustrationNotes from '../../../../assets/images/illustration_notes.svg'
import IllustrationDrugsInHand from '../../../../assets/images/illustration_drugs_in_hand.svg'

import {
  Container,
  Content,
  ContainerCards,
  ContentCard,
  ContentCardIcon,
  ContentCardText,
  ContentCardTitle,
  ContainerButtons,
  TextInformative,
} from './how_working_styles'
import { HeaderCentered, Button, ButtonType } from '../../../../ds'
import { useIntersection } from '../../../../hooks/useIntersection'
import { addingCurrentQueryParams } from '../../../../components/helpers/url_parser'

type HowWorkingProps = {
  id?: string
  className?: string
}
type hashMapIllustrationsType = {
  [key: string]: string
}

const hashMapIllustrations: hashMapIllustrationsType = {
  request: IllustrationPhoneInHand,
  notes: IllustrationNotes,
  drugs: IllustrationDrugsInHand,
}

export const HowWorking: React.FC<HowWorkingProps> = ({ id }) => {
  const {
    body: {
      for_customers: {
        how_working: { title, subtitle, arguments: reasons },
      },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <Content ref={ref}>
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
        <ContainerButtons>
          <Button
            label="Faça o seu orçamento"
            onClick={() =>
              window.open(
                addingCurrentQueryParams('https://farme.com.br/orcamento')
              )
            }
          />
          <TextInformative>sem compromisso</TextInformative>
        </ContainerButtons>
      </Content>
    </Container>
  )
}
