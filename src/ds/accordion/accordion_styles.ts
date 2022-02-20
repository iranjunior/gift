import styled from 'styled-components'

export const Container = styled.details`
  width: 100%;
  background-color: ${({ theme }) => theme.primary.light};
  border-radius: 8px;
  padding: 1rem;
`
export const Title = styled.summary`
  padding: 8px 0;
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
