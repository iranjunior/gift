import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../../context/data'
import { useIntersection } from '../../hooks/useIntersection'
import { Header } from '../../ds'
import {
  Container,
  Content,
  BlockNumbers,
  BlockNumber,
  Number,
  SubtitleNumber,
  Message,
} from './numbers_styles'

type NumbersProps = {
  id?: string
  className?: string
}

export const Numbers: React.FC<NumbersProps> = ({ id }) => {
  const {
    body: {
      common_pages: { numbers },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '0px', true)

  return (
    <Container ref={ref} id={id}>
      <Content>
        <Header description={numbers.description} title={numbers.title} />
        <BlockNumbers>
          {numbers.infos.map((info) => (
            <BlockNumber key={info.legend}>
              <NumberAnimated valueFinal={info.value} />
              <SubtitleNumber>{info.legend}</SubtitleNumber>
            </BlockNumber>
          ))}
        </BlockNumbers>
        <Message dangerouslySetInnerHTML={{ __html: numbers.message }} />
      </Content>
    </Container>
  )
}

type NumberAnimatedProps = {
  valueFinal: number
}

const NumberAnimated = ({ valueFinal }: NumberAnimatedProps) => {
  const ref = useRef(null as unknown as HTMLSpanElement)
  const [value, setValue] = useState(0)
  const inViewport = useIntersection(ref, '0px')
  const [isVisible, setVisibility] = useState(inViewport)
  useEffect(() => {
    const interval = async () => {
      await new Promise(() => {
        setTimeout(() => {
          if (valueFinal > 5000) {
            setValue(value + 101)
          } else if (valueFinal > 1000) {
            setValue(value + 51)
          } else {
            setValue(value + 1)
          }
        }, 20)
      })
    }
    if (isVisible && value < valueFinal) {
      interval()
    } else if (value >= valueFinal) {
      setValue(valueFinal)
    }
  }, [value, isVisible])

  useEffect(() => {
    if (inViewport) {
      setVisibility(true)
    } else {
      setVisibility(false)
    }
  }, [inViewport, value])

  return (
    <Number ref={ref} id={`aminated-number-${valueFinal}`}>
      +{value}
    </Number>
  )
}
