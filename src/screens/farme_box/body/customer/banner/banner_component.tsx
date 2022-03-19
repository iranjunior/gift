import React, { useContext } from 'react'

import images from '../../../../../assets/images'
import { Banner as BannerComponent } from '../../../../../ds'
import { DataContext } from '../../../../../context/data'

import { Container } from './banner_styles'

type BannerProps = {
  id?: string
}

export const Banner: React.FC<BannerProps> = ({ id }) => {
  const {
    body: {
      farme_box: { banner },
    },
  } = useContext(DataContext)

  return (
    <Container id={id}>
      <BannerComponent
        image={images.ImageDoctorLooking}
        title={banner.title}
        subtitle={banner.subtitle}
        button={{ text: 'Saiba mais' }}
        positionImageInTablet="right"
      />
    </Container>
  )
}
