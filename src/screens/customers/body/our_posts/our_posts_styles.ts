import styled from 'styled-components'
import { ContentDiv } from '../../../../ds/styles/common_styles'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.lightness};
  width: 100%;
  padding: 5% 0;
`
export const Content = styled(ContentDiv)`
  margin: 0 60px;
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
