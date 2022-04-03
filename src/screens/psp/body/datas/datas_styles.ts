import styled from 'styled-components'
import {
  ContentDiv,
  rowItensWithGap,
} from '../../../../ds/styles/common_styles'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.primary.default};
  width: 100%;
  padding: 5% 0;
`
export const Content = ContentDiv

export const PieChart = styled.img`
  width: 100%;
  max-width: 870px;
  margin: 0 ${({ theme }) => theme.spacing.internal};
`
export const ContainerButtons = styled.div`
  ${rowItensWithGap({
    gap: '1rem',
    justifyContent: 'center',
    alignItens: 'center',
  })}
  width: 336px;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    flex-wrap: wrap;
    button {
      width: 80%;
    }
  }
`
