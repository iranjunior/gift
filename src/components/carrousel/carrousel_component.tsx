import React, { useContext, useState } from 'react'
import images from '../../assets/images'
import { CarouselContent } from './content'
import { Container, Tabs, TabTitle, TabBar, Tab } from './carrousel_styles'
import { DataContext } from '../../context/data'

type hashMapType = {
  [key: string]: string
}

const hashMap: hashMapType = {
  Personalizada: images.ImageBoxPointingLeft,
  Organizada: images.ImageBoxPointingCenter,
  Funcional: images.ImageBoxPointingRight,
  Segura: images.ImageHandWithDrugs,
}

export const Carrousel = () => {
  const {
    body: {
      know_me: { carousel },
    },
  } = useContext(DataContext)

  const buildTabs = () =>
    carousel.map(({ label, ...props }) => ({
      image: hashMap[label],
      label,
      ...props,
    }))
  const tabs = buildTabs()
  const [active, setActive] = useState(tabs[0])

  return (
    <Container>
      <Tabs>
        {tabs.map((tab) => (
          <Tab onClick={() => setActive(tab)} key={tab.label}>
            <TabTitle active={active.label == tab.label}>{tab.label}</TabTitle>
            <TabBar active={active.label == tab.label} />
          </Tab>
        ))}
      </Tabs>
      <CarouselContent title={active.text} image={active.image} />
    </Container>
  )
}
