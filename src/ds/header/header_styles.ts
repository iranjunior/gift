import styled from 'styled-components'
import { columnItensWithGap } from '../styles/common_styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
`

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xxxs};
  font-family: ${({ theme }) => theme.font.family.sliver};
  text-transform: uppercase;
`

type TitleProps = {
  full?: boolean
}

export const Title = styled.span<TitleProps>`
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  width: ${({ full }) => (full ? '100%' : '60%')};
  text-align: center;
`

export const BlockText = styled.div`
  width: 640px;
  ${columnItensWithGap({
    gap: '1rem',
    alignItens: 'center',
    justifyContent: 'center',
  })}
`
export const Highlight = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  text-align: center;
`
export const Text = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.superDistant};
  width: 600px;
  text-align: center;
`
