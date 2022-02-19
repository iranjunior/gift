import styled from 'styled-components'

import { customersTheme } from '../../themes'

export const Container = styled.div`
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
