import styled from 'styled-components'
import { ContentDiv, rowItensWithGap } from '../styles/common_styles'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.lightness};
  width: 100%;
  padding: 5% 0;
`
export const Content = ContentDiv

export const SlideWrapper = styled.div`
  ${rowItensWithGap({
    gap: '60px',
    alignItens: 'center',
    justifyContent: 'center',
  })}
`

type SlideProps = {
  hidden?: boolean
  reversed?: boolean
}
export const Divisor = styled.div`
  width: 15%;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    display: none;
  }
`
export const Slide = styled.div<SlideProps>`
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  opacity: ${(props) => (props.hidden ? 0 : 1)};
  width: 100%;

  justify-content: space-between;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    gap: 2rem;
    justify-content: center;
    flex-wrap: ${({ reversed }) => (reversed ? 'wrap' : 'wrap-reverse')};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    margin: ${({ theme }) => theme.spacing.nano} auto;
  }
`
type DotIndicatorProps = {
  active?: boolean
}

export const DotIndicator = styled.div<DotIndicatorProps>`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active
      ? props.theme.primary.default
      : props.theme.colors.neutral.default};
  margin: 0.5rem;
`
export const BlockDots = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.desktop} - 1px)) {
    display: none;
  }
`
