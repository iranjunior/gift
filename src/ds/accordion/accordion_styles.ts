import styled from 'styled-components'

export const Container = styled.details`
  width: 100%;
  background-color: ${({ theme }) => theme.primary.light};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.internal};
`
export const Title = styled.summary`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-family: ${({ theme }) => theme.font.family.sliver};
`
export const Answer = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
`