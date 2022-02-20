import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.lightness};
  width: 100%;
  padding: 5% 0;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
`
export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  width: 85%;
  max-width: 1500px;
  justify-content: center;
  align-items: center;
`
export const DoubtsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  gap: 1rem;
`
