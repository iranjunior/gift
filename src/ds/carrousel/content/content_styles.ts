import styled from 'styled-components'

export const Text = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xxl};
  font-family: ${({ theme }) => theme.font.family.sliver};
`
export const ActionWrap = styled.div`
  display: flex;
  align-items: center;
`
export const Image = styled.img`
  width: 100%;
`
