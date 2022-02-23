import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`
export const BlockText = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const BlockImage = styled.div``

export const Content = styled.div`
  margin: 5%;
  display: flex;
  height: 400px;
  width: 85%;
  justify-content: space-between;
  align-items: center;
`
export const TextPrincipal = styled.div`
  *:not(legend) {
    font-size: ${({ theme }) => theme.font.sizes.xxl};
    font-family: ${({ theme }) => theme.font.family.sliver};
    font-weight: normal;
    margin: 0;
  }
  legend {
    font-size: ${({ theme }) => theme.font.sizes.ml};
    font-family: ${({ theme }) => theme.font.family.sliver};
    font-weight: normal;
    margin: 0;
  }
`

export const Image = styled.img`
  height: 100%;
`
