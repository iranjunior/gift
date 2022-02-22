import React, { useContext } from 'react'
import { DataContext } from '../../../../../context/data'

import { Card, HeaderCentered } from '../../../../../ds'
import { Container, Content, Cards } from './targets_styles'

type TargetsProps = {
  id?: string
}

export const Targets: React.FC<TargetsProps> = ({ id }) => {
  const {
    body: {
      home: { targets },
    },
  } = useContext(DataContext)

  return (
    <Container id={id}>
      <Content>
        <HeaderCentered title={targets.title} subtitle={targets.subtitle} />

        <Cards>
          {targets.cards.map((content) => (
            <Card
              key={content.title}
              description={content.text}
              title={content.title}
              type={content.type as 'doctors' | 'companies' | 'customers'}
            />
          ))}
        </Cards>
      </Content>
    </Container>
  )
}
