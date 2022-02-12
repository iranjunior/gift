import styled from 'styled-components'
import { customersTheme } from '../../themes'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: 16px auto;
  height: 64px;
  padding: 16px 0px;
`
export const Logo = styled.img`
  height: 64px;
`
export const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Option = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
`

export const Link = styled.a`
  color: ${customersTheme.color.textMenu};
  white-space: nowrap;
  text-decoration: none;
`

export const RequestOrderButton = styled.button`
  background-color: ${customersTheme.requestOrder.backgroundColor};
  border: none;
  border-radius: 4px;
  height: 48px;
  padding-right: 24px;
  padding-left: 24px;
  margin-left: 24px;
`
