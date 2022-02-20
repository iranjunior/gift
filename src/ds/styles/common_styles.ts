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
`
