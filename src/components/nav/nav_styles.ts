import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
  height: ${({ theme }) => theme.spacing.xs};
`

type CellProps = {
  active?: boolean
}
export const Cell = styled.div<CellProps>`
  background-color: ${({ active, theme }) =>
    active ? theme.primary.light : theme.primary.darkness};
  padding: ${({ theme }) => theme.spacing.nano};
  width: 100%;
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`
type LinkProps = {
  active?: boolean
}
export const Link = styled.a<LinkProps>`
  color: ${({ active, theme }) =>
    active ? theme.primary.darkness : theme.primary.light};.
  font-size: ${({ theme }) => theme.font.sizes.xxxs};
  
  
`
