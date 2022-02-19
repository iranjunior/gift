import styled from 'styled-components'
import { customersTheme } from '../../../../themes'

export const Container = styled.div`
  display: flex;
  background-color: ${customersTheme.backgroundColor.white};
  width: 100%;
  height: 100vh;
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
  justify-content: center;
  align-items: center;
`
export const DoubtsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  gap: 1rem;
`
export const DoubtItem = styled.details`
  width: 100%;
  background-color: ${customersTheme.color.highlightLight};
  border-radius: 8px;
  padding: 1rem;
`
export const DoubtTitle = styled.summary`
  padding: 8px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${customersTheme.font.sizes.medium};
  font-family: 'Clearface ITC Pro', sans-serif;
`
export const DoubtDescription = styled.p`
  font-size: ${customersTheme.font.sizes.extraSmall};
`
