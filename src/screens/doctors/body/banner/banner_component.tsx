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
      for_doctors: { banner },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <BannerComponent
        image={images.ImageAsianOldWoman}
        title={banner.title}
        subtitle={banner.subtitle}
        highlights={banner.highlight}
        button={{
          text: 'Saiba mais',
          onClick: () => window.open('/para-medicos/clinica', '_self'),
        }}
        positionImageInTablet="right"
      />
    </Container>
  )
}
