import React, { useContext, useRef } from 'react'

import { DataContext } from '../../../../context/data'
import { Button, ButtonType, Header } from '../../../../ds'
import { useIntersection } from '../../../../hooks/useIntersection'

import {
  Container,
  ContainerPosts,
  Content,
  PostsCard,
  PostsCardAuthor,
  PostsCardAvatar,
  PostsCardBottom,
  PostsCardBottomInfos,
  PostsCardCategory,
  PostsCardDate,
  PostsCardImage,
  PostsCardTitle,
} from './our_posts_styles'

type OurPostsProps = {
  id?: string
  className?: string
}

export const OurPosts: React.FC<OurPostsProps> = ({ id }) => {
  const {
    body: {
      for_doctors: {
        our_posts: { title, description, posts },
      },
    },
  } = useContext(DataContext)
  const ref = useRef(null as unknown as HTMLDivElement)
  useIntersection(ref, '100px', true)

  return (
    <Container ref={ref} id={id}>
      <Content ref={ref}>
        <Header full description={description} title={title} />
        <Button type={ButtonType.Ghost} label="Ver todos os posts" hasArrow />
        <ContainerPosts>
          {posts.map(
            ({ link, title, author, date, category, avatar, image }) => (
              <a key={link} href={link}>
                <PostsCard>
                  <PostsCardImage src={image} />
                  <PostsCardDate>{date}</PostsCardDate>
                  <PostsCardTitle>{title}</PostsCardTitle>
                  <PostsCardBottom>
                    <PostsCardAvatar>
                      <img src={avatar} alt="avatar" />
                    </PostsCardAvatar>
                    <PostsCardBottomInfos>
                      <PostsCardAuthor>{author}</PostsCardAuthor>
                      <PostsCardCategory>{category}</PostsCardCategory>
                    </PostsCardBottomInfos>
                  </PostsCardBottom>
                </PostsCard>
              </a>
            )
          )}
        </ContainerPosts>
      </Content>
    </Container>
  )
}
