/* eslint-disable indent */
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: nowrap;
  background-color: ${({ theme }) => theme.primary.light};
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    justify-content: center;
    flex-wrap: wrap;
  }
`
export const BlockText = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
    max-width: 100%;
  }
`
export const BlockImage = styled.div``

export const Content = styled.div`
  margin: 8% 10%;
  display: flex;
  height: 580px;
  width: 100%;
  justify-content: center;
  gap: 4rem;
  align-items: center;
  flex-wrap: nowrap;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    margin: 5%;
    gap: 1rem;
    height: auto;
    flex-wrap: wrap;
  }

  @media (width: ${({ theme }) => theme.breakpoints.desktop}),
    max-width: 1200px {
    margin: 5% 0;
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
  display: flex;
  flex-direction: column;

  *:not(highlight) {
    font-size: ${({ theme }) => theme.font.sizes.xxl};
    font-family: ${({ theme }) => theme.font.family.sliver};
    font-weight: normal;
    margin: 0;
    line-height: ${({ theme }) => theme.font.lineHeight.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    *:not(highlight) {
      font-size: ${({ theme }) => theme.font.sizes.xxl};
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
export const Video = styled.video`
  max-width: 700px;
  width: 90%;
`

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
  @media (width: ${({ theme }) => theme.breakpoints.desktop}),
    (max-width: 1080px) and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    width: 50%;
  }
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
    height: auto;
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}, max-width: 1200px) {
    height: 85%;
  }
`
