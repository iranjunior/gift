import styled from 'styled-components'
import { ContentDiv } from '../../../../ds/styles/common_styles'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.lightness};
  width: 100%;
  padding: 5% 0;
`
export const Content = styled(ContentDiv)`
  margin: 0 5%;
  width: 100%;
  button {
    align-self: flex-end;
    width: 200px;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: none;
    }
  }
  gap: 0;
`

export const PostsContainer = styled.div`
  width: 100%;
  height: 560px;
  background-color: ${({ theme }) => theme.primary.light};
`

export const ContainerPosts = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  margin-top: 4rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.neutral.darkness};
  }
`

export const PostsCard = styled.div`
  width: 420px;
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    h4 {
      text-decoration: underline;
    }
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.tablet} - 1px)) {
    width: 100%;
    height: auto;
  }
`

export const PostsCardImage = styled.img`
  border-radius: ${({ theme }) => theme.spacing.nano};
  height: 320px;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.tablet} - 1px)) {
    width: 100%;
    height: auto;
  }
`
export const PostsCardTitle = styled.h4`
  font-size: ${({ theme }) => theme.font.sizes.ml};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin: 0;
  height: 105px;
`
export const PostsCardDate = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xxxs};
  font-family: ${({ theme }) => theme.font.family.default};
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
  margin: 0.8rem 0;
`
export const PostsCardBottom = styled.div`
  display: flex;
  gap: 0.75rem;
  margin: 0.8rem 0;
`
export const PostsCardBottomInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.1rem;
  align-self: center;
`
export const PostsCardAvatar = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.base.light};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 75%;
    width: 75%;
  }
`
export const PostsCardAuthor = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xxs};
`
export const PostsCardCategory = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xxxs};
  color: ${({ theme }) => theme.colors.neutral.default};
`
