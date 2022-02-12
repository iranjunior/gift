import React from 'react'

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

export const KnowMe: React.FC<KnowMeProps> = ({ id }) => (
  <Container id={id}>
    <Content>
      <BlockText>
        <Highlight>Conheça a Far.me Box.</Highlight>
        <Text>
          Muito mais que uma caixa de remédios separados por dia e hora. Uma
          inteligência que analisa cada receita pra ter certeza de que os seus
          medicamentos não terão interação prejudicial no seu corpo.
        </Text>
      </BlockText>
      <Carrousel />
    </Content>
  </Container>
)
