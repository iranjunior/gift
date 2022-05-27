import React, { useRef } from 'react'
import { Button } from '..'
import { useIntersection } from '../../hooks/useIntersection'

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
    onClick?: () => void
  }
  positionImageInTablet?: 'center' | 'left' | 'right'
}

export const Banner: React.FC<BannerProps> = ({
  id,
  title,
  subtitle,
  highlights,
  image,
  button,
  positionImageInTablet,
}) => {
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container
      id={id}
      positionImageInTablet={positionImageInTablet}
      image={image}
    >
      <Content>
        <BlockText ref={ref}>
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
          {button ? (
            <Button onClick={button.onClick} label={button.text} />
          ) : null}
        </BlockText>
      </Content>
    </Container>
  )
}
