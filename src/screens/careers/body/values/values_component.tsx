import React, { useContext, useRef } from 'react'
import { DataContext } from '../../../../context/data'

import { HeaderCentered } from '../../../../ds'
import { useIntersection } from '../../../../hooks/useIntersection'
import {
  Container,
  Content,
  ValuesContainer,
  Value,
  ValueFirst,
  ValueNumber,
  ValueTitle,
  ValueDescription,
  ValueSecond,
} from './values_styles'

type ValuesProps = {
  id?: string
  className?: string
}

export const Values: React.FC<ValuesProps> = ({ id }) => {
  const {
    body: {
      careers: { values },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <Content>
        <HeaderCentered title={values.title} subtitle={values.subtitle} />
        <ValuesContainer>
          {values.values.map((value) => (
            <Value key={value.id}>
              <ValueFirst>
                <ValueNumber dangerouslySetInnerHTML={{ __html: value.id }} />
              </ValueFirst>
              <ValueSecond>
                <ValueTitle dangerouslySetInnerHTML={{ __html: value.title }} />
                <ValueDescription>{value.text}</ValueDescription>
              </ValueSecond>
            </Value>
          ))}
        </ValuesContainer>
      </Content>
    </Container>
  )
}
