import styled from 'styled-components'
import { customersTheme } from '../../themes'

export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${customersTheme.backgroundColor.full};
`

export const Body = styled.div`
  background-color: ${customersTheme.backgroundColor.active};
`
