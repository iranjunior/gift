/* eslint-disable indent */
import styled from 'styled-components'
import { columnItensWithGap } from '../../../../ds/styles/common_styles'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  background-color: ${({ theme }) => theme.primary.light};
`
export const BlockText = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
  }
`
export const BlockImage = styled.div``

export const Content = styled.div`
  margin: 5%;
  display: flex;
  height: 480px;
  width: 85%;
  max-width: 1080px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    padding: ${({ theme }) => theme.spacing.internal};
    height: auto;
  }
`
export const TextPrincipal = styled.div`
  line-height: 350%;

  *:not(legend) {
    font-size: ${({ theme }) => theme.font.sizes.xxl};
    font-family: ${({ theme }) => theme.font.family.sliver};
    font-weight: normal;
    margin: 0;
    @media (max-width: calc(${({ theme }) =>
        theme.breakpoints.desktop} - 1px)) {
      font-size: ${({ theme }) => theme.font.sizes.xl};
    }
  }
  legend {
    font-size: ${({ theme }) => theme.font.sizes.ml};
    font-family: ${({ theme }) => theme.font.family.sliver};
    font-weight: normal;
    margin: 0;
    @media (max-width: calc(${({ theme }) =>
        theme.breakpoints.desktop} - 1px)) {
      font-size: ${({ theme }) => theme.font.sizes.sm};
    }
  }
  highlight {
    font-family: ${({ theme }) => theme.font.family.highlight};
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

    @media (max-width: calc(${({ theme }) =>
        theme.breakpoints.desktop} - 1px)) {
      font-size: ${({ theme }) => theme.font.sizes.xxs};
    }
  }
`
export const Image = styled.img`
  height: 480px;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
    height: auto;
    margin-top: ${({ theme }) => theme.spacing.xl};
  }
`

export const TopicsContainer = styled.div`
  ${columnItensWithGap({ gap: '1rem' })}
`
