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
  button?: {
    text: string
  }
}

export const Banner: React.FC<BannerProps> = ({
  id,
  title,
  subtitle,
  image,
  button,
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
          {button ? <Button label={button.text} /> : null}
        </BlockText>
      </Content>
    </Container>
  )
}
