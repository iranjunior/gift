import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: nowrap;
  background-color: ${({ theme }) => theme.primary.light};
  margin-top: calc(${({ theme }) => theme.spacing.internal} * 2);
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    flex-wrap: wrap;
    margin-top: calc(${({ theme }) => theme.spacing.internal} * 5);
  }
`
export const BlockText = styled.div`
  width: 30%;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
  }
`
export const BlockImage = styled.div``

export const Content = styled.div`
  margin: 8% 5%;
  display: flex;
  height: 400px;
  width: 100%;
  max-width: 1120px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    gap: 1rem;
    height: auto;
    flex-wrap: wrap;
  }
`

export const Text = styled.div`
  p {
    font-size: ${({ theme }) => theme.font.sizes.xs};
    line-height: ${({ theme }) => theme.font.lineHeight.distant};
    letter-spacing: 2%;
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
    font-size: ${({ theme }) => theme.font.sizes.xl};
    font-family: ${({ theme }) => theme.font.family.sliver};
    font-weight: normal;
    margin: 0;
    line-height: ${({ theme }) => theme.font.lineHeight.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    *:not(highlight) {
      font-size: ${({ theme }) => theme.font.sizes.xl};
      font-family: ${({ theme }) => theme.font.family.sliver};
      font-weight: normal;
      margin: 0;
      line-height: ${({ theme }) => theme.font.lineHeight.medium};
    }
  }
  legend {
    font-size: ${({ theme }) => theme.font.sizes.ml};
    font-family: ${({ theme }) => theme.font.family.sliver};
    font-weight: regular;
    margin: 0;
  }
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
  max-width: 540px;
  object-fit: cover;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
    height: auto;
  }
`
