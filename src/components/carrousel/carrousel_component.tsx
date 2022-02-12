import React, { useEffect, useState } from 'react'

import {
  CustomContent,
  FunctionalContent,
  OrganizedContent,
  SafetyContent,
} from './contents'

import {
  Container,
  Content,
  Tabs,
  TabTitle,
  TabBar,
  Tab,
} from './carrousel_styles'

const tabs = [
  {
    index: 0,
    title: 'Personalizada',
    component: CustomContent,
  },
  {
    index: 1,
    title: 'Organizada',
    component: OrganizedContent,
  },
  {
    index: 2,
    title: 'Funcional',
    component: FunctionalContent,
  },
  {
    index: 3,
    title: 'Segura',
    component: SafetyContent,
  },
]

export const Carrousel = () => {
  const [active, setActive] = useState(tabs[0])
  return (
    <Container>
      <Tabs>
        {tabs.map((tab) => (
          <Tab onClick={() => setActive(tab)} key={tab.title}>
            <TabTitle active={active.title == tab.title}>{tab.title}</TabTitle>
            <TabBar active={active.title == tab.title} />
          </Tab>
        ))}
      </Tabs>
      <Content>{React.createElement(active.component)}</Content>
    </Container>
  )
}
