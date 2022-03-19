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
      who_we_are: { banner },
    },
  } = useContext(DataContext)

  return (
    <Container id={id}>
      <BannerComponent
        image={images.ImageBannerOlderWoman}
        title={banner.title}
        subtitle={banner.subtitle}
        button={{ text: 'Faça um orçamento' }}
        positionImageInTablet="right"
      />
    </Container>
  )
}
