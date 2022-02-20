import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.lightness};
  width: 100%;
  padding: 5% 0;
`
export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
`

export const Text = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  text-align: center;
`
export const Video = styled.video`
  width: 1080px;
`
