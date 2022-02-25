import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
export const BlockText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const BlockImage = styled.div``

export const Content = styled.div`
  margin: 5%;
  display: flex;
  height: 420px;
  justify-content: space-between;
  align-items: center;
  gap: 24rem;
`
export const TextPrincipal = styled.div`
  *:not(highlight) {
    font-size: ${({ theme }) => theme.font.sizes.xxl};
    font-family: ${({ theme }) => theme.font.family.sliver};
    font-weight: normal;
    margin: 0;
  }
  h1 {
    line-height: ${({ theme }) => theme.font.lineHeight.medium};
  }
`

export const Image = styled.img`
  height: 100%;
`
