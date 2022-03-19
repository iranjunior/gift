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
export const Content = ContentDiv

export const BlockText = styled.div`
  width: 640px;
  ${columnItensWithGap({
    gap: '1rem',
    justifyContent: 'center',
    alignItens: 'flex-start',
  })}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`

export const Text = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.superDistant};
  letter-spacing: 2%;
  font-family: 'Inter';

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.sizes.xxs};
  }
`
export const TextPrincipal = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.lg};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
  text-align: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.sizes.md};
  }
`
export const Highlight = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.display};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
  text-align: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.sizes.xxl};
  }
`
