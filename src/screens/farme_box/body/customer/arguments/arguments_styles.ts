import styled from 'styled-components'
import {
  ContentDiv,
  columnItensWithGap,
} from '../../../../../ds/styles/common_styles'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.lightness};
  width: 100%;
  padding: 5% 0;
`
export const Content = ContentDiv

export const BlockText = styled.div`
  ${columnItensWithGap({
    gap: '1rem',
    justifyContent: 'center',
    alignItens: 'center',
  })}
  padding: 0 60px;
`

export const TextPrincipal = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
  text-align: start;
`
type ImageProps = {
  square?: boolean
}

export const Image = styled.img<ImageProps>`
  height: 100%;
`
