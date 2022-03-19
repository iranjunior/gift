/* eslint-disable indent */
import styled from 'styled-components'

export const Container = styled.div`
  height: 560px;
  width: 100%;
  max-width: 1080px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  border-radius: ${({ theme }) => theme.spacing.nano};
  background-color: transparent;
  align-items: center;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    height: auto;
  }
  @media (width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }
`

export const LeftSide = styled.div`
  width: 540px;
  height: 560px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)),
    (width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    height: auto;
  }
  @media (width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    height: 100%;
  }
`

export const RightSide = styled.div`
  width: 540px;
  height: 560px;
  flex: 1;
  display: flex
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: calc(${({ theme }) =>
    theme.breakpoints.desktop} - 1px)),  (width: ${({ theme }) =>
  theme.breakpoints.tablet}) {
    width: 100%;
    height: auto;
  }
  @media (width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    height: 100%;
  }
`
