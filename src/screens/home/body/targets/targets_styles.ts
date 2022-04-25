import styled from 'styled-components'
import { ContentDiv } from '../../../../ds/styles/common_styles'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.lightness};
  width: 100%;
  padding: 5% 0;
`
export const Content = ContentDiv
export const Cards = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    div {
      margin: ${({ theme }) => theme.spacing.nano} 0;
    }
  }
`
