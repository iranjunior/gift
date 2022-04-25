import styled from 'styled-components'

export const Container = styled.div`
  height: 480px;
  width: 100%;
  max-width: 1080px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  border-radius: ${({ theme }) => theme.spacing.nano};
  background-color: transparent;
  align-items: center;
  position: relative;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    height: auto;
    grid-gap: ${({ theme }) => theme.spacing.internal};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin: ${({ theme }) => theme.spacing.nano} auto;
  }
`

export const LeftSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
    height: auto;
  }
`

export const RightSide = styled.div`
  
  flex: 1;
  display: flex
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    width: 100%;
    height: auto;
  }
`
export const ArrowContainer = styled.div<ArrowType>`
  position: absolute;
  bottom: -10%;
  z-index: 10;
  left: ${({ reverse }) => (reverse ? '35%' : '45%')};
`
type ArrowType = {
  reverse?: boolean
}

export const Arrow = styled.img<ArrowType>`
  transform: ${({ reverse }) => (reverse ? 'rotateY(180deg)' : 'rotate(0deg)')};
`
