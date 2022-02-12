import styled from 'styled-components'
import { medicalTheme } from '../../../themes/medical'

export const Container = styled.div`
  width: 347px;
  height: 543px;
  background-color: ${medicalTheme.backgroundColor.active};
  border-radius: 8px;
`

export const Content = styled.div`
  margin: 0 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const KnowMoreButton = styled.button`
  background-color: ${medicalTheme.requestOrder.backgroundColor};
  border: none;
  border-radius: 4px;
  height: 48px;
  width: 100%;
`
export const Image = styled.img`
  height: 80px;
  width: 80px;
`

export const TextPrincipal = styled.span`
  width: 100%;
  font-size: ${medicalTheme.font.sizes.large};
  font-family: 'Clearface ITC Pro', sans-serif;
  text-align: center;
`

export const Highlight = styled.span`
  font-size: ${medicalTheme.font.sizes.large};
  font-family: 'Gloria Hallelujah', sans-serif;
  text-align: center;
`

export const Text = styled.span`
  font-size: ${medicalTheme.font.sizes.extraExtraSmall};
  text-align: center;
  line-height: 28px;
`

export const Divisor = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${medicalTheme.color.indicatorActive};
`
