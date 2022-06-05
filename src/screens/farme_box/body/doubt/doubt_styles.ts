import styled from 'styled-components'
import { columnItensWithGap } from '../../../../ds/styles/common_styles'

export const Container = styled.div`
  ${columnItensWithGap({ gap: '5rem', alignItens: 'center' })}
  background-color: ${({ theme }) => theme.colors.neutral.lightness};
  width: 100%;
  padding: 0;
  padding-bottom: 5rem;
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    ${columnItensWithGap({ gap: '2rem', alignItens: 'center' })}
  }
`
export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  max-width: 1500px;
  justify-content: center;
  align-items: center;
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
  }
`
export const DoubtsContainer = styled.div`
  ${columnItensWithGap({
    gap: '1rem',
    alignItens: 'center',
    justifyContent: 'center',
  })}

  width: 80%;
  max-width: 860px;
`
