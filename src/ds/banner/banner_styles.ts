import styled from 'styled-components'
import { columnItensWithGap } from '../styles/common_styles'

type ContainerProps = {
  image: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  background: linear-gradient(
      to right,
      ${(props) => `${props.theme.colors.neutral.darkness}66`},
      transparent
    ),
    url(${(props) => props.image});
  background-size: cover;
  height: 640px;
`
export const BlockText = styled.div`
  width: 535px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  button {
    width: 200px;
  }
`
export const BlockImage = styled.div``

export const Content = styled.div`
  margin: 5%;
  display: flex;
  height: 400px;
  width: 85%;
  justify-content: space-between;
  align-items: center;
`

export const Text = styled.span`
  letter-spacing: 2%;
  width: 100%;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-end: 0;
  margin-inline-start: 0;
  font-size: ${({ theme }) => theme.font.sizes.sm};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
  text-align: start;
  color: ${({ theme }) => theme.colors.neutral.lightness};
`
type TextPrincipalProps = {
  compact?: boolean
}

export const TextPrincipal = styled.span<TextPrincipalProps>`
  font-size: ${({ theme, compact }) =>
    compact ? theme.font.sizes.lg : theme.font.sizes.xl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
  text-align: start;
  color: ${({ theme }) => theme.colors.neutral.lightness};

  *:not(highlight) {
    font-size: ${({ theme }) => theme.font.sizes.xxxl};
    font-family: ${({ theme }) => theme.font.family.sliver};
    font-weight: normal;
    margin: 0;
  }
`

export const Image = styled.img`
  height: 100%;
`

export const HighlightsContainer = styled.div`
  ${columnItensWithGap({ gap: '1rem' })}
`
