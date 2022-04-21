import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.internal};
  background-color: ${({ theme }) => theme.primary.darkness};
  display: none;
  width: 100vw;

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    display: flex;
    position: fixed;
    bottom: 0;
  }

  button {
    width: calc(100vw - (${({ theme }) => theme.spacing.internal} * 2));
  }
`
