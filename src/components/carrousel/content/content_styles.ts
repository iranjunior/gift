import styled from 'styled-components'
import { customersTheme } from '../../../themes'

export const Container = styled.div`
  height: 100%;
  max-height: 560px;
  width: 100%;
  max-width: 1080px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  border-radius: 8px;
  background-color: ${customersTheme.color.highlight};
`

export const LeftSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-left: 60px;
  padding-right: 60px;
`

export const Text = styled.span`
  font-size: ${customersTheme.font.sizes.extraExtraLarge};
  font-family: 'Clearface ITC Pro', sans-serif;
`
export const ActionWrap = styled.div`
  display: flex;
  align-items: center;
`

export const RequestOrderButton = styled.button`
  background-color: ${customersTheme.backgroundColor.white};
  border: none;
  border-radius: 4px;
  height: 48px;
  padding-right: 24px;
  padding-left: 24px;
`
export const RequestOrderLink = styled.a`
  padding-left: 24px;
  text-decoration: none;
`

export const RightSide = styled.div`
  width: 100%;
  flex: 1;
`

export const Image = styled.img`
  width: 100%;
`
