import styled from 'styled-components'

import { customersTheme } from '../../themes'

export const Container = styled.details`
  width: 100%;
  background-color: ${customersTheme.color.highlightLight};
  border-radius: 8px;
  padding: 1rem;
`
export const Title = styled.summary`
  padding: 8px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${customersTheme.font.sizes.medium};
  font-family: 'Clearface ITC Pro', sans-serif;
`
export const Answer = styled.p`
  font-size: ${customersTheme.font.sizes.extraSmall};
  line-height: 28px;
`
