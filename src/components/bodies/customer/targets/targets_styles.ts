import styled from 'styled-components'
import { customersTheme } from '../../../../themes'

export const Container = styled.div`
  display: flex;
  background-color: ${customersTheme.backgroundColor.white};
  width: 100%;
  height: 90vh;
  padding: 5% 0;
`
export const Content = styled.div`
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;
  gap: 8rem;
`
export const BlockText = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`
export const Highlight = styled.span`
  font-size: ${customersTheme.font.sizes.extraLarge};
  font-family: 'Clearface ITC Pro', sans-serif;
  text-align: center;
`
export const Text = styled.span`
  font-size: ${customersTheme.font.sizes.extraSmall};
  width: 600px;
  text-align: center;
  line-height: 28px;
`
export const Cards = styled.div`
  display: flex;
  gap: 1.5rem;
`
