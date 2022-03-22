import React, { useContext, useRef } from 'react'
import images from '../../../../assets/images'
import { DataContext } from '../../../../context/data'

import { Carrousel, HeaderCentered } from '../../../../ds'
import { useIntersection } from '../../../../hooks/useIntersection'
import { Container, Content } from './know_me_styles'

type hashMapType = {
  [key: string]: string
}

const hashMap: hashMapType = {
  Personalizada: images.ImageBoxPointingLeft,
  Organizada: images.ImageBoxPointingCenter,
  Funcional: images.ImageBoxPointingRight,
  Segura: images.ImageHandWithDrugs,
}

type KnowMeProps = {
  id?: string
  className?: string
}

export const KnowMe: React.FC<KnowMeProps> = ({ id, ...props }) => {
  const ref = useRef(null as unknown as HTMLDivElement)
  const {
    body: {
      home: { know_me },
    },
  } = useContext(DataContext)
  useIntersection(ref, '100px', true)
  const buildTabs = () =>
    know_me.carousel.map(({ label, ...props }) => ({
      image: hashMap[label],
      label,
      ...props,
    }))
  return (
    <Container ref={ref} {...props} id={id}>
      <Content>
        <HeaderCentered title={know_me.title} subtitle={know_me.subtitle} />
        <Carrousel content={buildTabs()} imageSizeInTablet="contain" />
      </Content>
    </Container>
  )
}
