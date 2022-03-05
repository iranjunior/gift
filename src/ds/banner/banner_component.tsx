import React from 'react'
import { Button } from '..'

import Icon from '../../assets/images/check.svg'

import {
  Container,
  Content,
  Text,
  TextPrincipal,
  BlockText,
  HighlightsContainer,
  Highlight,
  CheckIcon,
} from './banner_styles'

type BannerProps = {
  image: string
  id?: string
  title?: string
  subtitle?: string
  highlights?: string[]
  button?: {
    text: string
  }
}

export const Banner: React.FC<BannerProps> = ({
  id,
  title,
  subtitle,
  highlights,
  image,
  button,
}) => {
  return (
    <Container id={id} image={image}>
      <Content>
        <BlockText>
          {title ? (
            <TextPrincipal
              compact={!!highlights}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          ) : null}
          {subtitle ? (
            <Text
              dangerouslySetInnerHTML={{
                __html: subtitle,
              }}
            />
          ) : null}
          {highlights ? (
            <HighlightsContainer>
              {highlights.map((highlight, index) => (
                <Highlight key={highlight.split(' ')[0].concat(`-${index}`)}>
                  <CheckIcon src={Icon} />
                  <Text
                    dangerouslySetInnerHTML={{
                      __html: highlight,
                    }}
                  />
                </Highlight>
              ))}
            </HighlightsContainer>
          ) : null}
          {button ? <Button label={button.text} /> : null}
        </BlockText>
      </Content>
    </Container>
  )
}
