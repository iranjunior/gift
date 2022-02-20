import React, { useState } from 'react'

import { CarouselContent } from './content'
import { Container, Tabs, TabTitle, TabBar, Tab } from './carrousel_styles'

type Props = {
  label: string
  text: string
  image: string
}

type CarrouselProps = {
  content: Array<Props>
}

export const Carrousel: React.FC<CarrouselProps> = ({ content }) => {
  const [active, setActive] = useState(content[0])

  return (
    <Container>
      <Tabs>
        {content.map((tab) => (
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
