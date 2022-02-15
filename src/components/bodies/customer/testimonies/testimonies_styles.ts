import styled from 'styled-components'
import { customersTheme } from '../../../../themes'

export const Container = styled.div`
  display: flex;
  background-color: ${customersTheme.backgroundColor.white};
  width: 100%;
  height: 90vh;
  padding: 5% 0;
  flex-direction: column;
  align-items: center;
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
`

export const Subtitle = styled.span`
  font-size: ${customersTheme.font.sizes.extraExtraExtraSmall};
  font-family: 'Clearface ITC Pro', sans-serif;
  text-transform: uppercase;
`
export const Title = styled.span`
  font-size: ${customersTheme.font.sizes.extraLarge};
  font-family: 'Clearface ITC Pro', sans-serif;
  width: 60%;
  text-align: center;
`
export const Content = styled.div`
  margin: 10%;
  display: flex;
  height: 480px;
  width: 85%;
  max-width: 1500px;
  justify-content: space-between;
  align-items: center;
`
export const BlockText = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`
export const BlockImage = styled.div``

export const Text = styled.span`
  font-size: ${customersTheme.font.sizes.extraSmall};
  line-height: 22px;
  letter-spacing: 2%;
  font-family: 'Inter';
`
export const TextPrincipal = styled.span`
  font-size: ${customersTheme.font.sizes.extraLarge};
  font-family: 'Clearface ITC Pro', sans-serif;
  line-height: 45px;
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

type TestimonyProps = {
  hidden?: boolean
}

export const Testimony = styled.div<TestimonyProps>`
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  opacity: ${(props) => (props.hidden ? 0 : 1)};
  width: 100%;
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
      ? customersTheme.color.highlight
      : customersTheme.color.indicatorNeutral};
  margin: 0.5rem;
`
export const BlockDots = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 4rem;
`
