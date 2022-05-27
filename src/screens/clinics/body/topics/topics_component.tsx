import React, { useContext, useRef } from 'react'
import { useTheme } from 'styled-components'

import { people } from '../../../../assets/images'
import { DataContext } from '../../../../context/data'
import { CheckedItem } from '../../../../ds/checked_item'
import { useIntersection } from '../../../../hooks/useIntersection'

import {
  Container,
  Content,
  Image,
  TextPrincipal,
  Text,
  BlockText,
  TopicsContainer,
} from './topics_styles'

type TopicsProps = {
  id?: string
  className?: string
}

export const Topics: React.FC<TopicsProps> = ({ id }) => {
  const {
    body: {
      clinics: { topics },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  const theme = useTheme()
  return (
    <Container ref={ref} id={id}>
      <Content ref={ref}>
        <BlockText>
          <TextPrincipal dangerouslySetInnerHTML={{ __html: topics.title }} />
          <Text dangerouslySetInnerHTML={{ __html: topics.subtitle }} />
          <TopicsContainer>
            {topics.topics.map((topic, index) => (
              <CheckedItem
                text={topic}
                key={topic.split(' ')[0].concat(`-${index}`)}
                color={theme.primary.darkness}
              />
            ))}
          </TopicsContainer>
        </BlockText>
        <Image src={people.CarinaNevesPharmaceutical} />
      </Content>
    </Container>
  )
}
