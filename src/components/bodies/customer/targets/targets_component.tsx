import React, { useContext } from 'react'
import { DataContext } from '../../../../context/data'

import images from '../../../../assets/images'

import { Card } from '../../../card'
import {
  Container,
  Content,
  BlockText,
  Title,
  Subtitle,
  Cards,
} from './targets_styles'

type TargetsProps = {
  id?: string
}

export const Targets: React.FC<TargetsProps> = ({ id }) => {
  const {
    body: { targets },
  } = useContext(DataContext)
  return (
    <Container id={id}>
      <Content>
        <BlockText>
          <Title dangerouslySetInnerHTML={{ __html: targets.title }} />
          <Subtitle dangerouslySetInnerHTML={{ __html: targets.subtitle }} />
        </BlockText>
        <Cards>
          {targets.cards.map((content) => (
            <Card
              key={content.title}
              description={content.text}
              title={content.title}
              type={content.type}
            />
          ))}
        </Cards>
      </Content>
    </Container>
  )
}
