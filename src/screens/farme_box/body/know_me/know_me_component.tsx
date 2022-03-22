import React, { useContext, useRef } from 'react'
import images from '../../../../assets/images'
import { DataContext } from '../../../../context/data'

import { Carrousel } from '../../../../ds'
import { useIntersection } from '../../../../hooks/useIntersection'
import { Container, Content } from './know_me_styles'

type hashMapType = {
  [key: string]: string
}

const hashMap: hashMapType = {
  Orçamento: images.ImageOldWomanInComputer,
  Análise: images.ImagePeopleInStore,
  Entrega: images.ImagePersonReceivedBox,
}

type KnowMeProps = {
  id?: string
  className?: string
}

export const KnowMe: React.FC<KnowMeProps> = ({ id }) => {
  const {
    body: {
      farme_box: { carousel },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  const buildTabs = () =>
    carousel.map(({ label, ...props }) => ({
      image: hashMap[label],
      label,
      ...props,
    }))
  return (
    <Container ref={ref} id={id}>
      <Content>
        <Carrousel content={buildTabs()} />
      </Content>
    </Container>
  )
}
