import styled from 'styled-components'
import { ContentDiv } from '../../../../../ds/styles/common_styles'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.lightness};
  width: 100%;
  padding: 5% 0;
`
export const Content = ContentDiv
export const ValuesContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  width: 75%;
  justify-content: center;
`

export const Value = styled.div`
  width: 310px;
  gap: 1rem;
  display: flex;
`
export const ValueFirst = styled.div`
  display: flex;
`
export const ValueNumber = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xxxl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  color: ${({ theme }) => theme.primary.darkness};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.sizes.xxl};
  }
`
export const ValueTitle = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-family: ${({ theme }) => theme.font.family.sliver};
  color: ${({ theme }) => theme.primary.darkness};
  height: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.sizes.sm};
  }
`
export const ValueSecond = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const ValueDescription = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.superDistant};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.sizes.xxs};
  }
`
