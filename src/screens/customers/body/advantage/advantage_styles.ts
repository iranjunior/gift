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
  margin: 0 auto;
  padding: 0;
  gap: 3rem;
`

export const Main = styled.div`
  ${columnItensWithGap({
    gap: '2rem',
    justifyContent: 'center',
    alignItens: 'center',
  })}
`

type ImageProps = {
  square?: boolean
}

export const Image = styled.img<ImageProps>`
  height: 100%;
  max-height: 480px;
  width: 100%;
  max-width: 530px;
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`

export const BlockText = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
  }
`
export const BlockImage = styled.div``

export const Text = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.superDistant};
  letter-spacing: 2%;
  font-family: 'Inter';
`
export const TextPrincipal = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xxxl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.medium};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    font-size: ${({ theme }) => theme.font.sizes.lg};
  }
`
