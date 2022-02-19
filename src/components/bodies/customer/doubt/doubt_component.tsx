import React, { useContext } from 'react'
import { DataContext } from '../../../../context/data'
import { Header } from '../../../header'
import { Accordion } from '../../../accordion'

import { Container, Content, DoubtsContainer } from './doubt_styles'

type DoubtProps = {
  id?: string
}

export const Doubt: React.FC<DoubtProps> = ({ id }) => {
  const {
    body: { doubts: pageDoubts },
  } = useContext(DataContext)

  return (
    <Container id={id}>
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
