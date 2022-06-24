import React, { useContext, useRef } from 'react'
import images from '../../../../assets/images'
import { DataContext } from '../../../../context/data'

import { Carrousel, HeaderCentered } from '../../../../ds'
import { Content as ContentCarrousel } from '../../../../ds/carrousel/carrousel_component'
import { useIntersection } from '../../../../hooks/useIntersection'
import { Container, Content } from './know_me_styles'

type hashMapType = {
  [key: string]: string
}

const hashMap: hashMapType = {
  Simples: images.ImageBoxZoomIn,
  Segura: images.ImageBoxPointingRight,
  Completa: images.ImagePills,
}
const hashMapSizeImage: hashMapType = {
  Simples: 'auto',
  Segura: 'contain',
  Completa: 'cover',
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
    know_me.carousel.map<ContentCarrousel>(({ label, ...props }) => ({
      image: hashMap[label],
      sizeInTablet: hashMapSizeImage[label] as 'cover' | 'contain' | 'auto',
      label,
      ...props,
    }))
  buildTabs()
  return (
    <Container ref={ref} {...props} id={id}>
      <Content ref={ref}>
        <HeaderCentered title={know_me.title} subtitle={know_me.subtitle} />
        <Carrousel content={buildTabs()} />
      </Content>
    </Container>
  )
}
