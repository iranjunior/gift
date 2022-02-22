import styled from 'styled-components'

export const Text = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xxl};
  font-family: ${({ theme }) => theme.font.family.sliver};
`
export const ActionWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  button {
    width: 187px;
  }
`
export const Image = styled.img`
  width: 100%;
`
export const Container = styled.div`
  background-color: ${({ theme }) => theme.primary.default};
  border-radius: ${({ theme }) => theme.spacing.nano};
  padding: 0 60px;
`
