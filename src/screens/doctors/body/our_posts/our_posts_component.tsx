import React, { useContext, useRef } from 'react'

import { DataContext } from '../../../../context/data'
import { Button, ButtonType, Header } from '../../../../ds'
import { useIntersection } from '../../../../hooks/useIntersection'

import { Container, Content } from './our_posts_styles'

type OurPostsProps = {
  id?: string
  className?: string
}

export const OurPosts: React.FC<OurPostsProps> = ({ id }) => {
  const {
    body: {
      for_doctors: {
        our_posts: { title, description },
      },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <Content>
        <Header full description={description} title={title} />
        <Button type={ButtonType.Ghost} label="Ver todos os posts" hasArrow />
      </Content>
    </Container>
  )
}
