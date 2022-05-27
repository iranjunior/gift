import React, { useContext, useRef } from 'react'

import images from '../../../../assets/images'
import { Banner as BannerComponent } from '../../../../ds'
import { DataContext } from '../../../../context/data'

import { Container } from './banner_styles'
import { useIntersection } from '../../../../hooks/useIntersection'

type BannerProps = {
  id?: string
  className?: string
}

export const Banner: React.FC<BannerProps> = ({ id }) => {
  const {
    body: {
      careers: { banner },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <BannerComponent
        image={images.ImagePeopleInLab}
        title={banner.title}
        subtitle={banner.subtitle}
        button={{
          text: 'Ver Vagas',
          onClick: () => window.open('https://far-me.solides.jobs/'),
        }}
        positionImageInTablet="right"
      />
    </Container>
  )
}
