import React, { useContext, useRef } from 'react'

import images from '../../../../assets/images'
import { Banner as BannerComponent } from '../../../../ds'
import { DataContext } from '../../../../context/data'

import { Container } from './banner_styles'
import { useIntersection } from '../../../../hooks/useIntersection'
import { useNavigate } from 'react-router-dom'

type BannerProps = {
  id?: string
  className?: string
}

export const Banner: React.FC<BannerProps> = ({ id }) => {
  const {
    body: {
      farme_box: { banner },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)

  const navigate = useNavigate()

  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <BannerComponent
        image={images.ImageDoctorLooking}
        title={banner.title}
        subtitle={banner.subtitle}
        button={{
          text: 'Saiba mais',
          onClick: () => navigate('/para-medicos/clinica'),
        }}
        positionImageInTablet="right"
      />
    </Container>
  )
}
