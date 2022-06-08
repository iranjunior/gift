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
  customers: images.ImageRoadClinicsToFarme,
  companies: images.ImageRoadCompaniesToFarme,
}

type KnowMeProps = {
  id?: string
  className?: string
}

export const KnowMe: React.FC<KnowMeProps> = ({ id }) => {
  const {
    body: {
      farme_box: { carousel_images },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  const buildTabs = () =>
    carousel_images.map(({ id, ...props }) => ({
      image: hashMap[id],
      ...props,
    }))
  return (
    <Container ref={ref} id={id}>
      <Content ref={ref}>
        <Carrousel
          onlyImagens
          backgroundColor="#FFF3E2"
          content={buildTabs()}
          imageSizeInTablet="contain"
        />
      </Content>
    </Container>
  )
}
