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
      clinics: { banner },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <BannerComponent
        image={images.ImageWomanAtTree}
        title={banner.title}
        subtitle={banner.subtitle}
        button={{
          text: 'Faça um orçamento',
          onClick: () => window.open('https://farme.com.br/orcamento'),
        }}
        positionImageInTablet="right"
      />
    </Container>
  )
}
