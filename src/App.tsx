import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
// import { NavBanner } from './components'

const expand = keyframes`
  0% {
    transform: scale(0.8);
  }

  50% {
    transform: scale(1);
  }
  
  100% {
    transform: scale(0.8);
  }
`

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  animation: ${expand} 2s linear infinite;
`
const TextGigant = styled.span`
  display: flex;
  font-size 8rem;
  font-weight: 900;
`
const TextGigantMore = styled.span`
  display: flex;
  font-size 15rem;
  font-weight: 900;
`
const Value = styled.span`
  display: flex;
  font-size 15rem;
  font-weight: 900;
`
const Text = styled.span`
  display: flex;
  font-size 6rem;
  font-weight: 900;
`
function App() {
  return (
    <Container>
      <TextGigant>PARABÉNS</TextGigant>
      <Text>VOCÊ GANHOU:</Text>
      <NumberAnimated valueFinal={1000} />
      <TextGigantMore>REAIS</TextGigantMore>
    </Container>
  )
}

type NumberAnimatedProps = {
  valueFinal: number
}

const NumberAnimated = ({ valueFinal }: NumberAnimatedProps) => {
  const ref = useRef(null as unknown as HTMLSpanElement)
  const [value, setValue] = useState(0)
  useEffect(() => {
    const interval = async () => {
      await new Promise(() => {
        setTimeout(() => {
          if (valueFinal > 15000) {
            setValue(value + 191)
          } else if (valueFinal >= 10000) {
            setValue(value + 101)
          } else {
            setValue(value + 6)
          }
        }, 20)
      })
    }
    if (value < valueFinal) {
      interval()
    } else if (value >= valueFinal) {
      setValue(valueFinal)
    }
  }, [value])

  return (
    <Value ref={ref} id={`aminated-number-${valueFinal}`}>
      {transformNumberToString(value)}
    </Value>
  )
}

const transformNumberToString = (value: number) => {
  if (value >= 1000) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }
  return value.toString()
}

export default App
