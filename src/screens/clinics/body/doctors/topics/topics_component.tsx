import React, { useContext } from 'react'
import { useTheme } from 'styled-components'

import images from '../../../../../assets/images'
import { DataContext } from '../../../../../context/data'
import { CheckedItem } from '../../../../../ds/checked_item'

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
}

export const Topics: React.FC<TopicsProps> = ({ id }) => {
  const {
    body: {
      clinics: { topics },
    },
  } = useContext(DataContext)
  const theme = useTheme()
  return (
    <Container id={id}>
      <Content>
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
        <Image src={images.ImagePharmaceuticalWoman} />
      </Content>
    </Container>
  )
}
