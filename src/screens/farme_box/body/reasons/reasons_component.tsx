import React, { useContext, useRef } from 'react'
import { DataContext } from '../../../../context/data'
import IllustrationMoney from '../../../../assets/images/illustration_money.svg'
import IllustrationPhoneInHand from '../../../../assets/images/illustration_phone_in_hand.svg'
import IllustrationRunning from '../../../../assets/images/illustration_running.svg'
import IllustrationOkay from '../../../../assets/images/illustration_okay.svg'
import IllustrationPositive from '../../../../assets/images/illustration_positive.svg'
import IllustrationLupaPill from '../../../../assets/images/illustration_pill_lupa.svg'

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
} from './reasons_styles'
import { Button, ButtonType, HeaderCentered } from '../../../../ds'
import { useIntersection } from '../../../../hooks/useIntersection'

type ReasonsProps = {
  id?: string
  className?: string
}
type hashMapIllustrationsType = {
  [key: string]: string
}

const hashMapIllustrations: hashMapIllustrationsType = {
  cost: IllustrationMoney,
  customization: IllustrationPhoneInHand,
  delivery: IllustrationRunning,
  price: IllustrationOkay,
  cancel: IllustrationPositive,
  lupa: IllustrationLupaPill,
}

export const Reasons: React.FC<ReasonsProps> = ({ id }) => {
  const {
    body: {
      farme_box: {
        reasons: { reasons, title },
      },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <Content ref={ref}>
        <HeaderCentered title={title} />
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
