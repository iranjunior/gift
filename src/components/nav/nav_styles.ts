import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: calc(${({ theme }) => theme.spacing.xs});
  position: fixed;
  background-color: ${({ theme }) => theme.primary.darkness};
  position: fixed;
  top: 0;
  z-index: 200;
`

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`
type CellProps = {
  active?: boolean
}
export const Cell = styled.div<CellProps>`
  background-color: ${({ active, theme }) =>
    active ? theme.primary.light : theme.primary.darkness};

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

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
  height: calc(${({ theme }) => theme.spacing.xs});
  align-items: center;
  align-self: center;
  
`
