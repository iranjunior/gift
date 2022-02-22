import React from 'react'
import { Button } from '..'

import {
  Container,
  Content,
  Text,
  TextPrincipal,
  BlockText,
} from './banner_styles'

type BannerProps = {
  image: string
  id?: string
  title?: string
  subtitle?: string
}

export const Banner: React.FC<BannerProps> = ({
  id,
  title,
  subtitle,
  image,
}) => {
  return (
    <Container id={id} image={image}>
      <Content>
        <BlockText>
          {title ? (
            <TextPrincipal dangerouslySetInnerHTML={{ __html: title }} />
          ) : null}
          {subtitle ? (
            <Text
              dangerouslySetInnerHTML={{
                __html: subtitle,
              }}
            />
          ) : null}
          <Button label="Faça um orçamento" />
        </BlockText>
      </Content>
    </Container>
  )
}
