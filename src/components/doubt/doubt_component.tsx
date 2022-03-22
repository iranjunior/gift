import React, { useContext, useRef } from 'react'
import { DataContext } from '../../context/data'
import { Accordion, Header } from '../../ds'
import { useIntersection } from '../../hooks/useIntersection'

import { Container, Content, DoubtsContainer } from './doubt_styles'

type DoubtProps = {
  id?: string
  className?: string
}

export const Doubt: React.FC<DoubtProps> = ({ id }) => {
  const {
    body: {
      common_pages: { doubts: pageDoubts },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '0px', true)

  return (
    <Container ref={ref} id={id}>
      <Header description={pageDoubts.description} title={pageDoubts.title} />
      <Content>
        <DoubtsContainer>
          {pageDoubts.doubts.map((doubt) => (
            <Accordion
              id={doubt.title.replaceAll(' ', '-').toLocaleLowerCase()}
              key={doubt.title}
              title={doubt.title}
              answer={doubt.answer}
            />
          ))}
        </DoubtsContainer>
      </Content>
    </Container>
  )
}