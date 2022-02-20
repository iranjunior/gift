import styled from 'styled-components'
import { columnItensWithGap } from '../../../../ds/styles/common_styles'

export const Container = styled.div`
  ${columnItensWithGap({ gap: '8rem', alignItens: 'center' })}
  background-color: ${({ theme }) => theme.colors.neutral.lightness};
  width: 100%;
  padding: 5% 0;
`
export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  width: 85%;
  max-width: 1500px;
  justify-content: center;
  align-items: center;
`
export const DoubtsContainer = styled.div`
  ${columnItensWithGap({
    gap: '1rem',
    alignItens: 'center',
    justifyContent: 'center',
  })}
  width: 60%;
`
