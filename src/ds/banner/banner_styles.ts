/* eslint-disable indent */
import styled from 'styled-components'
import { columnItensWithGap } from '../styles/common_styles'

type ContainerProps = {
  image: string
  positionImageInTablet?: 'center' | 'left' | 'right'
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  background: linear-gradient(
      to right,
      ${(props) => `${props.theme.colors.neutral.darkness}80`},
      transparent
    ),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: 640px;
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    background-position: ${(props) => props.positionImageInTablet ?? 'center'};
  }
`
export const BlockText = styled.div`
  width: 535px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  button {
    width: 200px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    button {
      width: 100%;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    button {
      margin: ${({ theme }) => theme.spacing.nano} auto;
    }
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
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 16px auto;
    align-items: flex-end;
    height: auto;
  }
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
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.sizes.sm};
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme, compact }) =>
      compact ? theme.font.sizes.sm : theme.font.sizes.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin: ${({ theme }) => theme.spacing.internal} 0;
  }
`

export const Image = styled.img`
  height: 100%;
`

export const HighlightsContainer = styled.div`
  ${columnItensWithGap({ gap: '1rem' })}
`
