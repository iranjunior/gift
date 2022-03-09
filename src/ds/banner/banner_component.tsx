import React from 'react'
import { Button } from '..'

import Icon from '../../assets/images/check.svg'

import { CheckedItem } from '../checked_item'

import {
  Container,
  Content,
  Text,
  TextPrincipal,
  BlockText,
  HighlightsContainer,
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
                <CheckedItem
                  key={highlight.split(' ')[0].concat(`-${index}`)}
                  text={highlight}
                />
              ))}
            </HighlightsContainer>
          ) : null}
          {button ? <Button label={button.text} /> : null}
        </BlockText>
      </Content>
    </Container>
  )
}
