import React, { useContext } from 'react'

import { DataContext } from '../../../../../context/data'

import {
  Container,
  Content,
  Text,
  BlockText,
  TextPrincipal,
} from './declaration_styles'

type DeclarationProps = {
  id?: string
}

export const Declaration: React.FC<DeclarationProps> = ({ id }) => {
  const {
    body: {
      who_we_are: { declaration },
    },
  } = useContext(DataContext)

  return (
    <Container id={id}>
      <Content>
        <BlockText>
          <TextPrincipal
            dangerouslySetInnerHTML={{ __html: declaration.title }}
          />
          <Text dangerouslySetInnerHTML={{ __html: declaration.declaration }} />
        </BlockText>
      </Content>
    </Container>
  )
}
