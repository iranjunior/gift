import React, { useContext, useRef } from 'react'
import { DataContext } from '../../../../context/data'
import Person1 from '../../../../assets/images/person_1.png'

import {
  Container,
  Content,
  Main,
  Image,
  BlockText,
  TextPrincipal,
  Text,
} from './advantage_styles'

import { HeaderCentered, Slides } from '../../../../ds'
import { useIntersection } from '../../../../hooks/useIntersection'

type AdvantageProps = {
  id?: string
  className?: string
}

export const Advantage: React.FC<AdvantageProps> = ({ id }) => {
  const {
    body: {
      for_customers: {
        advantages: { advantages, subtitle, title, legend },
      },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  const LeftSide = () => <Image src={Person1} />

  type RightSideProps = {
    highlight: string
    text: string
  }
  const RightSide = ({ highlight, text }: RightSideProps) => (
    <BlockText>
      <TextPrincipal>{highlight}</TextPrincipal>
      <Text>{text}</Text>
    </BlockText>
  )

  return (
    <Container ref={ref} id={id}>
      <Content>
        <HeaderCentered legend={legend} title={title} subtitle={subtitle} />
        <Main>
          <Slides
            slides={advantages.map(({ title, text, id }) => ({
              LeftSide: <LeftSide />,
              RightSide: <RightSide highlight={title} text={text} />,
              key: id,
            }))}
            reversed
          />
        </Main>
      </Content>
    </Container>
  )
}
