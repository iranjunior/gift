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

export const Text = styled.span`
  font-size: ${customersTheme.font.sizes.extraLarge};
  font-family: 'Clearface ITC Pro', sans-serif;
  text-align: center;
`
export const Video = styled.video`
  width: 1080px;
`
