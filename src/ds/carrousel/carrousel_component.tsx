import React, { useState } from 'react'

import { CarrouselContent } from './content/content_component'
import { Container, Tabs, TabTitle, TabBar, Tab } from './carrousel_styles'

type Props = {
  label: string
  image: string
  text?: string
}

type CarrouselProps = {
  content: Array<Props>
  imageSizeInTablet?: 'cover' | 'contain'
  onlyImagens?: boolean
}

export const Carrousel: React.FC<CarrouselProps> = ({
  content,
  imageSizeInTablet,
  onlyImagens,
}) => {
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
      <CarrouselContent
        onlyImagens={onlyImagens}
        title={active.text}
        image={active.image}
        imageSizeInTablet={imageSizeInTablet}
      />
    </Container>
  )
}
