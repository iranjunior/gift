import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primary.darkness};
`

export const Body = styled.div`
  background-color: ${({ theme }) => theme.primary.light};

  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
