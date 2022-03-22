import React, { useEffect, useState } from 'react'

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
  const [stopped, setStop] = useState(false)
  let timeout: NodeJS.Timeout
  const interval = async () => {
    await new Promise(() => {
      timeout = setTimeout(() => {
        const nextSlide = slides[slides.indexOf(slideActive) + 1] ?? slides[0]
        setSlide(nextSlide)
      }, 5000)
    })
  }

  useEffect(() => {
    if (!stopped) {
      interval()
    }
  }, [slideActive, stopped])

  return (
    <Container
      onMouseEnter={() => {
        setStop(true)
        clearTimeout(timeout)
      }}
      onMouseLeave={() => setStop(false)}
      id={id}
    >
      <Content>
        <SlideWrapper>
          {slides.map(({ LeftSide, RightSide, key }) => (
            <Slide
              className="animate-slide"
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
