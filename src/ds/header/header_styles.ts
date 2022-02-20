import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
`

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xxxs};
  font-family: ${({ theme }) => theme.font.family.sliver};
  text-transform: uppercase;
`
export const Title = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  width: 60%;
  text-align: center;
`
