import styled from 'styled-components'
import { customersTheme } from '../../../../themes'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
`

export const LeftSide = styled.div`
  display: flex;
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
`

export const Image = styled.img`
  width: 100%;
`
