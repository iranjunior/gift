import styled from 'styled-components'
import { medicalTheme, companiesTheme, customersTheme } from '../../themes'

type ContainerProps = {
  type: string
}

type hashMapType = {
  [key: string]: {
    backgroundColor: {
      active: string
    }
  }
}

const hashMap: hashMapType = {
  doctors: medicalTheme,
  companies: companiesTheme,
  customers: customersTheme,
}

export const Container = styled.div<ContainerProps>`
  width: 283px;
  height: 463px;
  border-radius: 8px;
  padding: 32px;
  background-color: ${(props) => hashMap[props.type].backgroundColor.active};
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
  height: 115px;
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
