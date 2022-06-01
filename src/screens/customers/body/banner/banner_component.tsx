import React, { useContext, useRef } from 'react'

import images from '../../../../assets/images'
import { Banner as BannerComponent } from '../../../../ds'
import { DataContext } from '../../../../context/data'

import { Container } from './banner_styles'
import { useIntersection } from '../../../../hooks/useIntersection'
import { addingCurrentQueryParams } from '../../../../components/helpers/url_parser'

type BannerProps = {
  id?: string
  className?: string
}

export const Banner: React.FC<BannerProps> = ({ id }) => {
  const {
    body: {
      for_customers: { banner },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <BannerComponent
        image={images.ImageDrugsInTable}
        title={banner.title}
        subtitle={banner.subtitle}
        button={{
          text: 'Saiba mais',
          onClick: () =>
            window.open(
              addingCurrentQueryParams('/para-medicos/clinica'),
              '_self'
            ),
        }}
      />
    </Container>
  )
}
