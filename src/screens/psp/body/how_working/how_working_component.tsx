import React, { useContext, useRef } from 'react'
import { DataContext } from '../../../../context/data'

import {
  Container,
  Content,
  ContentCard,
  ContentCardNumber,
  ContentCardTitle,
  ContentCardText,
  ContainerCards,
  ContainerButtons,
  Main,
} from './how_working_styles'
import { Button, ButtonType, HeaderCentered } from '../../../../ds'
import { useIntersection } from '../../../../hooks/useIntersection'

type HowWorkingProps = {
  id?: string
  className?: string
}

export const HowWorking: React.FC<HowWorkingProps> = ({ id }) => {
  const {
    body: {
      psp: { how_working },
    },
  } = useContext(DataContext)
  const { title, subtitle } = how_working
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container id={id}>
      <Content ref={ref}>
        <HeaderCentered title={title} subtitle={subtitle} />
        <Main>
          <ContainerCards>
            {how_working.arguments.map((argument, index) => (
              <ContentCard key={argument.id}>
                <ContentCardNumber>{`${index + 1}º`}</ContentCardNumber>
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
            <Button label="Faça o seu orçamento" />
            <Button label="sem compromisso" type={ButtonType.Ghost} />
          </ContainerButtons>
        </Main>
      </Content>
    </Container>
  )
}
