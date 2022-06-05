/* eslint-disable indent */
import styled from 'styled-components'
import { ContentDiv, rowItensWithGap } from '../../ds/styles/common_styles'
export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.primary.default};
  width: 100%;
  padding: 5% 0;
`
export const Number = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.giant};
  font-family: ${({ theme }) => theme.font.family.sliver};

  @media (width: ${({ theme }) => theme.breakpoints.desktop}),
    (max-width: 1080px) and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.font.sizes.display};
  }
`
export const SubtitleNumber = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-family: ${({ theme }) => theme.font.family.sliver};
  text-align: center;

  @media (width: ${({ theme }) => theme.breakpoints.desktop}),
    (max-width: 1200px) and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.font.sizes.sm};
  }
`
export const Message = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-family: ${({ theme }) => theme.font.family.sliver};
`

export const Content = ContentDiv
export const BlockNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
  }
`

export const BlockNumbers = styled.div`
  ${rowItensWithGap({ gap: '10rem', alignItens: 'center' })}
  flex-wrap: nowrap;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}),
    (width: ${({ theme }) => theme.breakpoints.desktop}) {
    ${rowItensWithGap({
      gap: '5rem',
      alignItens: 'center',
      justifyContent: 'center',
    })}
    flex-wrap: wrap;
  }
`

export const Text = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  width: 600px;
  text-align: center;
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
`
