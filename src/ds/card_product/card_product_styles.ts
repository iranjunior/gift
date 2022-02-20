import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  max-height: 560px;
  width: 100%;
  max-width: 1080px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  border-radius: ${({ theme }) => theme.spacing.nano};
  background-color: ${({ theme }) => theme.primary.default};
`

export const LeftSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

export const RightSide = styled.div`
  width: 100%;
  flex: 1;
`
