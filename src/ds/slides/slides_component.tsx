import React, { useState } from 'react'

import {
  Container,
  Content,
  Slide,
  BlockDots,
  DotIndicator,
  SlideWrapper,
  Divisor,
} from './slides_styles'

type SlideProp = {
  LeftSide: JSX.Element
  RightSide: JSX.Element
  key: string
}

type SlidesProps = {
  id?: string
  slides: SlideProp[]
  reversed?: boolean
}

export const Slides: React.FC<SlidesProps> = ({ id, slides, reversed }) => {
  const [slideActive, setSlide] = useState(slides[0])
  return (
    <Container id={id}>
      <Content>
        <SlideWrapper>
          {slides.map(({ LeftSide, RightSide, key }) => (
            <Slide
              reversed={reversed}
              hidden={slideActive.key !== key}
              key={key}
            >
              {LeftSide}
              <Divisor />
              {RightSide}
            </Slide>
          ))}
          <BlockDots>
            {slides.map((slide) => (
              <DotIndicator
                key={slide.key.concat('-dot')}
                active={slide.key === slideActive.key}
                onClick={() => setSlide(slide)}
              />
            ))}
          </BlockDots>
        </SlideWrapper>
      </Content>
    </Container>
  )
}
