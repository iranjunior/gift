import React from 'react'

import ImageHome from '../../../../assets/home-image.png'

import {
  Container,
  Content,
  Text,
  Image,
  TextPrincipal,
  BlockText,
  Highlight,
} from './who_we_some_styles'

type MainProps = {
  id?: string
}

export const Main: React.FC<MainProps> = ({ id }) => (
  <Container id={id}>
    <Content>
      <BlockText>
        <TextPrincipal>
          A farmácia <br /> que te ajuda a viver <Highlight>melhor</Highlight>.
        </TextPrincipal>
        <Text>
          Aqui, você recebe seus medicamentos de um jeito simples e prático. Com
          serviços personalizados, levamos mais comodidade e segurança para os
          seus cuidados com a saúde.
        </Text>
      </BlockText>
      <Image src={ImageHome} />
    </Content>
  </Container>
)
