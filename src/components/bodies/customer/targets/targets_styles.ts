import styled from 'styled-components'
import {
  columnItensWithGap,
  ContentDiv,
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
    alignItens: 'center',
    justifyContent: 'center',
  })}
`
export const Title = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  text-align: center;
`
export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  width: 600px;
  text-align: center;
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
`
export const Cards = styled.div`
  display: flex;
  gap: 1.5rem;
`
