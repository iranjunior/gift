import styled from 'styled-components'
import {
  ContentDiv,
  columnItensWithGap,
} from '../../../../ds/styles/common_styles'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.lightness};
  width: 100%;
  padding: 5% 0;
`
export const Content = styled(ContentDiv)`
  gap: 4rem;
`

export const BlockText = styled.div`
  ${columnItensWithGap({
    gap: '1rem',
    justifyContent: 'flex-start',
    alignItens: 'flex-start',
  })}
  padding: 0 60px;
  div {
    span {
      font-size: ${({ theme }) => theme.font.sizes.xxs};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    padding: 0;
    justify-content: flex-end;
  }
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    button {
      width: 100%;
      max-width: 400px;
    }
  }
`

export const Text = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.superDistant};
  letter-spacing: 2%;
  font-family: 'Inter';
  text-align: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.sizes.xxs};
  }
`
export const TextPrincipal = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
  text-align: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.sizes.sm};
  }
`
type ImageProps = {
  square?: boolean
}

export const Image = styled.img<ImageProps>`
  height: 100%;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
    height: auto;
  }
`
