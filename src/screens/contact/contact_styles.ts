import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primary.light};
`

export const Body = styled.div`
  background-color: ${({ theme }) => theme.primary.light};

  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.internal};
  margin-top: calc(${({ theme }) => theme.spacing.internal} * 2);

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    flex-wrap: wrap;
    margin-top: calc(${({ theme }) => theme.spacing.internal} * 5);
  }
`
