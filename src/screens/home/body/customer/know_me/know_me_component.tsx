import React, { useContext } from 'react'
import images from '../../../../../assets/images'
import { DataContext } from '../../../../../context/data'

import { Carrousel, HeaderCentered } from '../../../../../ds'
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
}

export const KnowMe: React.FC<KnowMeProps> = ({ id }) => {
  const {
    body: {
      home: {
        customers: { know_me },
      },
    },
  } = useContext(DataContext)

  const buildTabs = () =>
    know_me.carousel.map(({ label, ...props }) => ({
      image: hashMap[label],
      label,
      ...props,
    }))
  return (
    <Container id={id}>
      <Content>
        <HeaderCentered title={know_me.title} subtitle={know_me.subtitle} />
        <Carrousel content={buildTabs()} imageSizeInTablet="contain" />
      </Content>
    </Container>
  )
}
