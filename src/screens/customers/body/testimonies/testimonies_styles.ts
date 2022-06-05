import styled from 'styled-components'
import { ContentDiv } from '../../../../ds/styles/common_styles'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.lightness};
  width: 100%;
  padding: 5% 0;
`
export const Content = styled(ContentDiv)`
  width: 100%;
  gap: 2rem;
`
export const BlockText = styled.div`
  width: 410px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin: ${({ theme }) => theme.spacing.nano} auto;
  }
`
export const BlockImage = styled.div``

export const Text = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  line-height: 22px;
  letter-spacing: 2%;
  font-family: 'Inter';
`
type TextPrincipalProps = {
  size: number
}

export const TextPrincipal = styled.span<TextPrincipalProps>`
  font-size: ${({ size, theme }) => {
    if (size > 200) {
      return theme.font.sizes.md
    }
    if (size > 140) {
      return theme.font.sizes.ml
    }
    if (size > 80) {
      return theme.font.sizes.lg
    }
    return theme.font.sizes.xl
  }};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
  text-align: center;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    font-size: ${({ theme }) => theme.font.sizes.lg};
  }
`
type ImageProps = {
  square?: boolean
}

export const Image = styled.img<ImageProps>`
  height: 100%;
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`
export const Quotation = styled.img`
  height: 24px;
`
