/* eslint-disable indent */
import styled, { css } from 'styled-components'

type columnItensWithGapArgs = {
  gap: string
  alignItens?: string
  justifyContent?: string
}

export const columnItensWithGap = (args: columnItensWithGapArgs) => css`
  display: flex;
  flex-direction: column;
  align-items: ${args.alignItens || 'start'};
  justify-content: ${args.justifyContent || 'space-between'};
  gap: ${args.gap};
`
export const rowItensWithGap = (args: columnItensWithGapArgs) => css`
  display: flex;
  flex-direction: row;
  align-items: ${args.alignItens || 'start'};
  justify-content: ${args.justifyContent || 'space-between'};
  gap: ${args.gap};
`

export const ContentDiv = styled.div`
  margin: 0 auto;
  ${columnItensWithGap({
    gap: '8rem',
    alignItens: 'center',
    justifyContent: 'center',
  })}

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    ${columnItensWithGap({
      gap: '2rem',
      alignItens: 'center',
      justifyContent: 'center',
    })}
    padding: ${({ theme }) => theme.spacing.internal} 0;
    width: calc(100% - (${({ theme }) => theme.spacing.internal} * 2));
  }
  @media (width: ${({ theme }) => theme.breakpoints.desktop}),
    (max-width: 1080px) and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.spacing.internal} 0;
    width: calc(100% - (${({ theme }) => theme.spacing.internal} * 2));
  }
`
