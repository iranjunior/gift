import styled from 'styled-components'
import {
  ContentDiv,
  rowItensWithGap,
} from '../../../../ds/styles/common_styles'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral.lightness};
  width: 100%;
  padding: 5% 0;
`
export const Content = ContentDiv
export const BlockText = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`
export const BlockImage = styled.div``

export const Text = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  line-height: 22px;
  letter-spacing: 2%;
  font-family: 'Inter';
`
export const TextPrincipal = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-family: ${({ theme }) => theme.font.family.sliver};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
  text-align: center;
`
type ImageProps = {
  square?: boolean
}

export const Image = styled.img<ImageProps>`
  height: 100%;
`
export const Quotation = styled.img`
  height: 24px;
`
export const TestimoniesWrapper = styled.div`
  ${rowItensWithGap({
    gap: '60px',
    alignItens: 'center',
    justifyContent: 'center',
  })}
`

type TestimonyProps = {
  hidden?: boolean
}

export const Testimony = styled.div<TestimonyProps>`
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  opacity: ${(props) => (props.hidden ? 0 : 1)};
  width: 100%;
  gap: 20rem;
  justify-content: space-between;
  animation: show-testimony 1s ease-in-out;

  @keyframes show-testimony {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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
`
