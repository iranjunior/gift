/* eslint-disable indent */
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  flex-wrap: nowrap;
  background-color: ${({ theme }) => theme.primary.light};
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    flex-wrap: wrap;
  }
`
export const BlockText = styled.div`
  width: 30%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
    max-width: 100%;
    margin: 0 5%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin-bottom: ${({ theme }) => theme.spacing.internal};
  }
`
export const BlockImage = styled.div``

export const Content = styled.div`
  margin: 5% 0 5% 10%;
  display: flex;
  height: 500px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  @media (width: ${({ theme }) => theme.breakpoints.desktop}),
    max-width: 1200px {
  }
  @media (max-width: 1440px) and (min-width: 1316px) {
  }
  @media (max-width: 1315px) and (min-width: 1024px) {
    margin: 5% 0 5% 5%;
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    gap: 1rem;
    margin: 5% 0;
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
    font-size: ${({ theme }) => theme.font.sizes.xxl};
    font-family: ${({ theme }) => theme.font.family.sliver};
    font-weight: normal;
    margin: 0;
    line-height: ${({ theme }) => theme.font.lineHeight.medium};
    @media (max-width: 1440px) and (min-width: 1316px) {
      font-size: ${({ theme }) => theme.font.sizes.xl};
    }
    @media (max-width: 1315px) and (min-width: 1023px) {
      font-size: ${({ theme }) => theme.font.sizes.lg};
    }
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
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

export const Image = styled.img`
  height: 100%;
  width: 100%;
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

export const Video = styled.video`
  max-width: 888px;
  width: 100%;

  @media (max-width: 1315px) and (min-width: 1023px) {
    width: 55%;
    height: auto;
  }
`
