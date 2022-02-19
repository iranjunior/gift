import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 90%;
`
export const BlockText = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const BlockImage = styled.div``

export const Content = styled.div`
  margin: 5%;
  display: flex;
  height: 400px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const Text = styled.div`
  p {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 2%;
    font-family: 'Inter';
    width: 100%;
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
  }
`
export const TextPrincipal = styled.div`
  *:not(highlight) {
    font-size: 64px;
    line-height: 60px;
    font-family: 'Clearface ITC Pro', sans-serif;
    font-weight: normal;
    margin: 0;
  }
`

export const Image = styled.img`
  height: 100%;
`
