import React, { useState } from 'react'

import { CarrouselContent } from './content/content_component'
import { Container, Tabs, TabTitle, TabBar, Tab } from './carrousel_styles'

export type Content = {
  label: string
  image: string
  text?: string
  sizeInTablet?: 'cover' | 'contain' | 'auto'
}

type CarrouselProps = {
  content: Array<Content>
  imageSizeInTablet?: 'cover' | 'contain' | 'auto'
  onlyImagens?: boolean
  backgroundColor?: string
}

export const Carrousel: React.FC<CarrouselProps> = ({
  content,
  imageSizeInTablet,
  onlyImagens,
  backgroundColor,
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
        backgroundColor={backgroundColor}
        title={active.text}
        image={active.image}
        imageSizeInTablet={
          active.sizeInTablet ? active.sizeInTablet : imageSizeInTablet
        }
      />
    </Container>
  )
}
