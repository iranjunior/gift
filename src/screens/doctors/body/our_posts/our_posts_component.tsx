import React, { useContext } from 'react'

import { DataContext } from '../../../../context/data'
import { Button, ButtonType, Header } from '../../../../ds'

import { Container, Content } from './our_posts_styles'

type OurPostsProps = {
  id?: string
}

export const OurPosts: React.FC<OurPostsProps> = ({ id }) => {
  const {
    body: {
      for_doctors: {
        our_posts: { title, description },
      },
    },
  } = useContext(DataContext)

  return (
    <Container id={id}>
      <Content>
        <Header full description={description} title={title} />
        <Button type={ButtonType.Ghost} label="Ver todos os posts" hasArrow />
      </Content>
    </Container>
  )
}
