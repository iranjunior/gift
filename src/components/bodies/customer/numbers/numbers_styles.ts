import styled from 'styled-components'
import { customersTheme } from '../../../../themes'

export const Container = styled.div`
  display: flex;
  background-color: ${customersTheme.color.highlight};
  width: 100%;
  height: 90vh;
  padding: 5% 0;
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
export const Number = styled.span`
  font-size: ${customersTheme.font.sizes.giant};
  font-family: 'Clearface ITC Pro', sans-serif;
`
export const SubtitleNumber = styled.span`
  font-size: ${customersTheme.font.sizes.medium};
  font-family: 'Clearface ITC Pro', sans-serif;
`
export const Message = styled.span`
  font-size: ${customersTheme.font.sizes.medium};
  font-family: 'Clearface ITC Pro', sans-serif;
`

export const Content = styled.div`
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;
  gap: 8rem;
`
export const BlockNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const BlockNumbers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;
`

export const Highlight = styled.span`
  font-size: ${customersTheme.font.sizes.medium};
  font-family: 'Gloria Hallelujah', sans-serif;
`
export const Text = styled.span`
  font-size: ${customersTheme.font.sizes.extraSmall};
  width: 600px;
  text-align: center;
  line-height: 28px;
`
