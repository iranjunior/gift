import styled from 'styled-components'
import {
  ContentDiv,
  rowItensWithGap,
} from '../../../../../ds/styles/common_styles'
export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.primary.default};
  width: 100%;
  padding: 5% 0;
`
export const Number = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.giant};
  font-family: ${({ theme }) => theme.font.family.sliver};
`
export const SubtitleNumber = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-family: ${({ theme }) => theme.font.family.sliver};
`
export const Message = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-family: ${({ theme }) => theme.font.family.sliver};
`

export const Content = ContentDiv
export const BlockNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const BlockNumbers = styled.div`
  ${rowItensWithGap({ gap: '10rem', alignItens: 'center' })}
`

export const Text = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  width: 600px;
  text-align: center;
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
`
