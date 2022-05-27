import styled from 'styled-components'
import { medicalTheme, companiesTheme, customersTheme } from '../../themes'

type ContainerProps = {
  type: 'doctors' | 'companies' | 'customers'
}

type hashMapType = {
  [key: string]: {
    primary: {
      light: string
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
  border-radius: ${({ theme }) => theme.spacing.nano};
  padding: ${({ theme }) => theme.spacing.xs};
  background-color: ${(props) => hashMap[props.type].primary.light};
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  button {
    width: 100%;
    font-size: ${({ theme }) => theme.font.sizes.xxs};
  }
`

export const Image = styled.img`
  height: ${({ theme }) => theme.spacing.xxxl};
  width: ${({ theme }) => theme.spacing.xxxl};
`

export const TextPrincipal = styled.span`
  width: 100%;
  font-size: ${({ theme }) => theme.font.sizes.lg};
  font-family: ${({ theme }) => theme.font.family.sliver};
  text-align: center;
  height: 115px;
`
export const Text = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  text-align: center;
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
`

export const Divisor = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.primary.darkness};
`
