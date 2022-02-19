import React, { useContext } from 'react'
import { DataContext } from '../../../../context/data'

import { Carrousel } from '../../../carrousel'
import {
  Container,
  Content,
  BlockText,
  Highlight,
  Text,
} from './know_me_styles'

type KnowMeProps = {
  id?: string
}

export const KnowMe: React.FC<KnowMeProps> = ({ id }) => {
  const {
    body: { know_me },
  } = useContext(DataContext)
  return (
    <Container id={id}>
      <Content>
        <BlockText>
          <Highlight dangerouslySetInnerHTML={{ __html: know_me.title }} />
          <Text dangerouslySetInnerHTML={{ __html: know_me.subtitle }} />
        </BlockText>
        <Carrousel />
      </Content>
    </Container>
  )
}
