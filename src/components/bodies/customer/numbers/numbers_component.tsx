import React, { useContext } from 'react'
import { DataContext } from '../../../../context/data'

import { Carrousel } from '../../../carrousel'
import { Header } from '../../../header'
import {
  Container,
  Content,
  BlockNumbers,
  BlockNumber,
  Highlight,
  Subtitle,
  Title,
  Number,
  SubtitleNumber,
  Message,
} from './numbers_styles'

type NumbersProps = {
  id?: string
}

export const Numbers: React.FC<NumbersProps> = ({ id }) => {
  const {
    body: { numbers },
  } = useContext(DataContext)
  return (
    <Container id={id}>
      <Content>
        <Header description={numbers.description} title={numbers.title} />
        <BlockNumbers>
          {numbers.infos.map((info) => (
            <BlockNumber key={info.legend}>
              <Number>{info.value}</Number>
              <SubtitleNumber>{info.legend}</SubtitleNumber>
            </BlockNumber>
          ))}
        </BlockNumbers>
        <Message dangerouslySetInnerHTML={{ __html: numbers.message }} />
      </Content>
    </Container>
  )
}
